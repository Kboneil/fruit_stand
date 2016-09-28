$(document).ready(function () {

function Fruit (name, price) {
		this.name = name;
		this.price = price;
	}


var apple = new Fruit ('apple', 9.50);
var orange = new Fruit ('orange', 9.50);
var banana = new Fruit ('banana', .50);
var grape = new Fruit ('grape', .50);

var totalValue;

 var buyerApple = {
	 buyerAppleAmount: 0,
	 buyerAppleTotalPrice: 0,
	 buyerAppleAveragePrice: 0,
 }

 var buyerOrange = {
	 buyerOrangeAmount: 0,
	 buyerOrangeTotalPrice: 0,
	 buyerOrangeAveragePrice: 0,
 }

var buyerBanana = {
	buyerBananaAmount: 0,
	buyerBananaTotalPrice: 0,
	buyerBananaAveragePrice: 0,
}

var buyerGrape = {
	buyerGrapeAmount: 0,
	buyerGrapeTotalPrice: 0,
	buyerGrapeAveragePrice: 0,
}
myFunction();

$("#apple").on('click', 'button', function () {
	if (totalValue > apple.price) {
		totalValue -= apple.price;
		buyerAppleAmount++;
		buyerAppleTotalPrice+=apple.price;
		buyerAppleAveragePrice= buyerAppleTotalPrice/buyerAppleAmount;
	}
})

var interval;
function myFunction (){
	interval = setInterval(callFruits, 3000);
}

function callFruits () {
	changeFruitPrice(apple);
	changeFruitPrice(orange);
	changeFruitPrice(banana);
	changeFruitPrice(grape);
}

function changeFruitPrice (fruit) {
	var priceAdj = 0;
	priceAdj = randomNumber(-50,50);
	priceAdj /= 100;
	console.log("priceAdj", priceAdj);
	fruit.price +=priceAdj;
	if (fruit.price > 9.99) {
		fruit.price = 9.99;
	} else if (fruit.price < 0.50) {
		fruit.price = 0.50;
	}
	var price = '#' + fruit.name + "Price";
	$(price).text(fruit.price.toFixed(2));
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

});

// console.log("apple", apple.price);
