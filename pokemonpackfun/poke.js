 
window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click", openPack);
}
 
function randomNumber(min, max) {
	return Math.ceil(Math.random() * (max-min) + min)


}

function openPack() {
	//alert("open pack");
	let cardsOpened = document.getElementById("pokemon-cards-opened");
	while (cardsOpened.firstChild) {
		cardsOpened.firstChild.remove();
	}

	for (let i =0; i < 5; i++){
		
			//<div> </div>
		let cardDiv = document.createElement("div");
			//<div class="pokemon-card"> </div>
		cardDiv.classList.add("pokemon-card");

			// creates image
		let cardImg = document.createElement("img");
			// asigns image to each image element in the html code
		cardImg.id = i;


		let num = 1
		if (i == 4){
			num = randomNumber(0,5);
		}
		else {
			num = randomNumber(6, 16);
		}		
		

			// gets image source
		cardImg.src = "./pokemon-cards/card(" + num.toString() + ").png";

			// nests the image in the div tags
		cardDiv.appendChild(cardImg);
			// nests allat in the "pokemon-cards-opened" div!
		document.getElementById("pokemon-cards-opened").appendChild(cardDiv);

	}
}
 


let mybutton = document.getElementById("myBtn");

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
