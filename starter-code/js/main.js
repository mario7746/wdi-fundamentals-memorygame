console.log("JS file is connected to HTML! Woo!")

var board = document.getElementById('board-game')

function createCards() {
	var cardElement;

	for (var i = 0 ; i<=3; i++) {
		cardElement = document.createElement('div')
		cardElement.className = 'card'

		board.appendChild(cardElement)
	}
}
createCards()


// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// if (cardOne === cardFour) {
//   alert = "Sorry try again";
// } else if (cardTwo === cardThree) {
//   alert  ("Sorry try again");
// } else if (cardOne === cardTwo) {
//   alert ("You've found a match!");
// } else if (cardThree === cardFour) {
//   alert ("You've found a match!");	
// } else {
//   alert ("Nothing");
// }