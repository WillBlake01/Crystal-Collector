//gems random number between 1-12
//solution number random number between 19-120

$(document).ready(function(){

	var yourMatchingNumber = 0;
	var randomNum = randomNumGen();

	// Setting up starting variables
	var wins = 0;
	var losses = 0;
	var crystals;

	function randomNumCrystals() {
		return {
			red: {
				points: Math.floor(Math.random() * 12) + 1,
				imageUrl: 'assets/images/red-gem.jpg'
			},
			blue: {
				points: Math.floor(Math.random() * 12) + 1,
				imageUrl: 'assets/images/blue-gem.jpg'
			},
			green: {
				points: Math.floor(Math.random() * 12) + 1,
				imageUrl: 'assets/images/green-gem.jpg'
			},
			pink: {
				points: Math.floor(Math.random() * 12) + 1,
				imageUrl: 'assets/images/pink-gem.jpg'
			}
		};
	}

	// Function to create a number between 19 and 120.
	function randomNumGen() {
		return Math.floor(Math.random() * 102) + 19;
	}

	function setGame() {
		yourMatchingNumber = 0;
		crystals = randomNumCrystals();
		randomNum = randomNumGen();
		$('#solution').html('<h1>' + randomNum + '</h1>');
	}

	function updateDom(didUserWin) {
		$('#wins-losses').empty();

		if (didUserWin === true) {
			$('#wins-losses').append($('<p>').text('You won!!'));
			setGame();
			renderMatchingNumber();
		} else if (didUserWin === false) {
			$('#wins-losses').append($('<p>').text('You lost!!'));
			setGame();
			renderMatchingNumber();
		}

		var wSpan = $('<span>').text(wins);
		var lSpan = $('<span>').text(losses);

		var pWins = $('<p>').text('Wins: ');
		var pLosses = $('<p>').text('Losses: ');

		pWins.append(wSpan);
		pLosses.append(lSpan);

		$('#wins-losses').append(pWins);
		$('#wins-losses').append(pLosses);
	}

	// Function to render crystals
	function renderCrystals() {
		for (var key in crystals) {
			var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
			var crystalImg = $("<img alt='image' class='crystal-img'>").attr('src', crystals[key].imageUrl);
			crystalDiv.append(crystalImg);
			$('#crystal-area').append(crystalDiv);
		}
	}

	function updateMatchingNumber(crystal) {
		yourMatchingNumber += crystals[crystal.attr('data-name')].points;
	}

	function renderMatchingNumber() {
		var scoreNumDiv = $("<div id='score-number'>").html('<h1>' + yourMatchingNumber + '</h1>');
		$('#score-area').html();
		$('#score-area').html(scoreNumDiv);
	}

	// Call functions to start game
	setGame();
	updateDom();
	renderCrystals();
	renderMatchingNumber();

	// on.click event for the crystals
	$('.crystals-button').on('click', function(event) {
		// Update current guess number and render
		updateMatchingNumber($(this));
		renderMatchingNumber();

		if (yourMatchingNumber === randomNum) {
			wins++;
			setGame();
			updateDom(true);
		} else if (yourMatchingNumber > randomNum) {
			losses++;
			setGame();
			updateDom(false);
		}
	});
});
