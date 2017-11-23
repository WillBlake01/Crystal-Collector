//gems random number between 1-12
//solution number random number between 19-120

$(document).ready(function(){

//Gem value array
var gemValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

var solutionValue = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28",
"29","30", "31", "32", "33", "34", "35", "36", "37", "38", "39","40", "41", "42",
"43", "44", "45", "46", "47", "48", "49","50", "51", "52", "53", "54", "55", "56",
"57", "58", "59","60", "61", "62", "63", "64", "65", "66", "67", "68", "69","70",
"71", "72", "73", "74", "75", "76", "77", "78", "79","80", "81", "82", "83", "84",
"85", "86", "87", "88", "89","90", "91", "92", "93", "94", "95", "96", "97", "98",
"99","100", "101", "102", "103", "104", "105", "106", "107", "108", "109","110", 
"111", "112", "113", "114", "115", "116", "117", "118", "119","120"];

var scoreReset = 0;
var score = "";
var wins = "";
var losses = "";

//Set gem values
var redValue = gemValue[Math.floor(Math.random()*gemValue.length)];
var greenValue = gemValue[Math.floor(Math.random()*gemValue.length)];
var blueValue = gemValue[Math.floor(Math.random()*gemValue.length)];
var pinkValue = gemValue[Math.floor(Math.random()*gemValue.length)];
var solution = solutionValue[Math.floor(Math.random()*solutionValue.length)];

//Reset score to zero
$("div#score-number").html("<h1>" + scoreReset + "</h1>");
console.log(solution);

//Assign a solution
$("button").on("click", function pickSolution() {
	solution = parseInt(solution);
	$("div#solution").html("<h1>" + solution + "</h1>");
});

//Assign to buttons
$("button#red-gem").on("click", function redclick() {
	redValue = parseInt(redValue);
	score = parseInt(score + redValue);
	$("div#score-number").html("<h1>" + score + "</h1>");
	if (score > solution) {
		$("div#result").html("<p>" + "You Lose!" + "</p>");
	} else if (score == solution) {
		$("div#result").html("<p>" + "You Win!" + "</p>");
	}
});

$("button#green-gem").on("click", function greenclick() {
	greenValue = parseInt(greenValue);
	score = parseInt(score + greenValue);
	$("div#score-number").html("<h1>" + score + "</h1>");
	if (score > solution) {
		$("div#result").html("<p>" + "You Lose!" + "</p>");
	} else if (score == solution) {
		$("div#result").html("<p>" + "You Win!" + "</p>");
	}
});

$("button#blue-gem").on("click", function blueclick() {
	blueValue = parseInt(blueValue);
	score = parseInt(score + blueValue);
	$("div#score-number").html("<h1>" + score + "</h1>");
	if (score > solution) {
		$("div#result").html("<p>" + "You Lose!" + "</p>");
	} else if (score == solution) {
		$("div#result").html("<p>" + "You Win!" + "</p>");
	}
});

$("button#pink-gem").on("click", function pinkclick() {
	pinkValue = parseInt(pinkValue);
	score = parseInt(score + pinkValue);
	$("div#score-number").html("<h1>" + score + "</h1>");
	if (score > solution) {
		$("div#result").html("<p>" + "You Lose!" + "</p>");
	} else if (score == solution) {
		$("div#result").html("<p>" + "You Win!" + "</p>");
	}
});

});