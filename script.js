$(document).ready(function () {

function Fruit (name, price) {
		this.name = name;
		this.price = price;
	}


var apple = new Fruit ('apple', 5);
var orange = new Fruit ('orange', 5);
var banana = new Fruit ('banana', 5);
var grape = new Fruit ('grape', 5);

var totalValue = 100;

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

$("#apple").on('click', '.buttonBuy', function () {
	if (totalValue > apple.price) {
		totalValue -= apple.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerApple.buyerAppleAmount++;
		$('#appleAmount').text(buyerApple.buyerAppleAmount);
		buyerApple.buyerAppleTotalPrice+=apple.price;
		$('#totalApplePrice').text((buyerApple.buyerAppleTotalPrice).toFixed(2));
		buyerApple.buyerAppleAveragePrice=buyerApple.buyerAppleTotalPrice/buyerApple.buyerAppleAmount;
		$('#averageApplePrice').text((buyerApple.buyerAppleAveragePrice).toFixed(2));
	} else {
		alert("You do not have enough money for that item!");
	}
});

$("#apple").on('click', '.buttonSell', function () {
	if (buyerApple.buyerAppleAmount > 0) {
		totalValue += apple.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerApple.buyerAppleAmount-= 1;
		$('#appleAmount').text(buyerApple.buyerAppleAmount);
		buyerApple.buyerAppleTotalPrice-=apple.price;
		$('#totalApplePrice').text((buyerApple.buyerAppleTotalPrice).toFixed(2));
	} else {
		alert("Out of apples!");
	}
});


$("#orange").on('click', '.buttonBuy', function () {
	if (totalValue > orange.price) {
		totalValue -= orange.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerOrange.buyerOrangeAmount++;
		$('#orangeAmount').text(buyerOrange.buyerOrangeAmount);
		buyerOrange.buyerOrangeTotalPrice+=orange.price;
		$('#totalOrangePrice').text((buyerOrange.buyerOrangeTotalPrice).toFixed(2));
		buyerOrange.buyerOrangeAveragePrice=buyerOrange.buyerOrangeTotalPrice/buyerOrange.buyerOrangeAmount;
		$('#averageOrangePrice').text((buyerOrange.buyerOrangeAveragePrice).toFixed(2));
	} else {
		alert("You do not have enough money for that item!");
	}
});

$("#orange").on('click', '.buttonSell', function () {
	if (buyerOrange.buyerOrangeAmount > 0) {
		totalValue += orange.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerOrange.buyerOrangeAmount-= 1;
		$('#orangeAmount').text(buyerOrange.buyerOrangeAmount);
		buyerOrange.buyerOrangeTotalPrice-=orange.price;
		$('#totalOrangePrice').text((buyerOrange.buyerOrangeTotalPrice).toFixed(2));
	} else {
		alert("Out of oranges!");
	}
});

$("#banana").on('click', '.buttonBuy', function () {
	if (totalValue > banana.price) {
		totalValue -= banana.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerBanana.buyerBananaAmount++;
		$('#bananaAmount').text(buyerBanana.buyerBananaAmount);
		buyerBanana.buyerBananaTotalPrice+=banana.price;
		$('#totalBananaPrice').text((buyerBanana.buyerBananaTotalPrice).toFixed(2));
		buyerBanana.buyerBananaAveragePrice=buyerBanana.buyerBananaTotalPrice/buyerBanana.buyerBananaAmount;
		$('#averageBananaPrice').text((buyerBanana.buyerBananaAveragePrice).toFixed(2));
	} else {
		alert("You do not have enough money for that item!");
	}
});

$("#banana").on('click', '.buttonSell', function () {
	if (buyerBanana.buyerBananaAmount > 0) {
		totalValue += banana.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerBanana.buyerBananaAmount-= 1;
		$('#bananaAmount').text(buyerBanana.buyerBananaAmount);
		buyerBanana.buyerBananaTotalPrice-=banana.price;
		$('#totalBananaPrice').text((buyerBanana.buyerBananaTotalPrice).toFixed(2));
	} else {
		alert("Out of bananas!");
	}
});

$("#grape").on('click', '.buttonBuy', function () {
	if (totalValue > grape.price) {
		totalValue -= grape.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerGrape.buyerGrapeAmount++;
		$('#grapeAmount').text(buyerGrape.buyerGrapeAmount);
		buyerGrape.buyerGrapeTotalPrice+=grape.price;
		$('#totalGrapePrice').text((buyerGrape.buyerGrapeTotalPrice).toFixed(2));
		buyerGrape.buyerGrapeAveragePrice=buyerGrape.buyerGrapeTotalPrice/buyerGrape.buyerGrapeAmount;
		$('#averageGrapePrice').text((buyerGrape.buyerGrapeAveragePrice).toFixed(2));
	} else {
		alert("You do not have enough money for that item!");
	}
});

$("#grape").on('click', '.buttonSell', function () {
	if (buyerGrape.buyerGrapeAmount > 0) {
		totalValue += grape.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerGrape.buyerGrapeAmount-= 1;
		$('#grapeAmount').text(buyerGrape.buyerGrapeAmount);
		buyerGrape.buyerGrapeTotalPrice-=grape.price;
		$('#totalGrapePrice').text((buyerGrape.buyerGrapeTotalPrice).toFixed(2));
	} else {
		alert("Out of grapes!");
	}
});

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
