console.log("JS file is connected to HTML! Woo!")

var board = document.getElementById('board-game')
var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []

var isTwoCards = function(){

	var typeOfCard = this.getAttribute('data-card');
	var kingImg = '<img src="Images/king.png" alt="King Card" />'
	var queenImg = '<img src="Images/queen.png" alt="Queen Card" />'
	



	if (typeOfCard === 'king') {
		this.innerHTML = kingImg
	}else{
		this.innerHTML = queenImg
	}



	cardsInPlay.push( typeOfCard );

	if (cardsInPlay.length === 2) {

		setTimeout(isMatch, 250)
		

  }

}

var isMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You've found a match!")
	} else {
	  alert ("Sorry try again.");	
	}

	cardsInPlay = [];
	var cardElements = document.getElementsByClassName("card");
	for (var i = 0; i < cardElements.length; i++) {
	    cardElements[i].innerHTML = "";
	}


}

function createCards() {
	var cardElement;

	for (var i = 0 ; i<=cards.length-1; i++) {
		cardElement = document.createElement('div')
		cardElement.className = 'card'
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)


		board.appendChild(cardElement)
	}
}



createCards()


