$(document).ready(function () {
//constructor function for different fruits
function Fruit (name, price) {
		this.name = name;
		this.price = price;
	}

//creates fruit objects
var apple = new Fruit ('apple', 5);
var orange = new Fruit ('orange', 5);
var banana = new Fruit ('banana', 5);
var grape = new Fruit ('grape', 5);

var totalValue = 100;
//object to keep track of the user's interaction with the fruits
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
//my function changes the fruit prices every 15 seconds
myFunction();
//when the user clicks on the buy button for each fruit this changes that fruit amount, how much they
//have spent on that fruit, the average price they paid and the total amount of money they have.
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
	} else {
		alert("Out of apples!");
	}
});

//when the user clicks on the buy button for each fruit this changes that fruit amount, how much they
//have spent on that fruit, the average price they paid and the total amount of money they have.
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

//when the user clicks the sell button it reduces the amount of that fruit and
//the total amount of money they have
$("#orange").on('click', '.buttonSell', function () {
	if (buyerOrange.buyerOrangeAmount > 0) {
		totalValue += orange.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerOrange.buyerOrangeAmount-= 1;
		$('#orangeAmount').text(buyerOrange.buyerOrangeAmount);
	} else {
		alert("Out of oranges!");
	}
});
//when the user clicks on the buy button for each fruit this changes that fruit amount, how much they
//have spent on that fruit, the average price they paid and the total amount of money they have.
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
//when the user clicks the sell button it reduces the amount of that fruit and
//the total amount of money they have
$("#banana").on('click', '.buttonSell', function () {
	if (buyerBanana.buyerBananaAmount > 0) {
		totalValue += banana.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerBanana.buyerBananaAmount-= 1;
		$('#bananaAmount').text(buyerBanana.buyerBananaAmount);
	} else {
		alert("Out of bananas!");
	}
});
//when the user clicks on the buy button for each fruit this changes that fruit amount, how much they
//have spent on that fruit, the average price they paid and the total amount of money they have.
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
//when the user clicks the sell button it reduces the amount of that fruit and
//the total amount of money they have
$("#grape").on('click', '.buttonSell', function () {
	if (buyerGrape.buyerGrapeAmount > 0) {
		totalValue += grape.price;
		console.log('total value', totalValue);
		$('#totalValue').text(totalValue.toFixed(2));
		buyerGrape.buyerGrapeAmount-= 1;
		$('#grapeAmount').text(buyerGrape.buyerGrapeAmount);
	} else {
		alert("Out of grapes!");
	}
});
//prevents the user from buying and selling after 5 minutes
setTimeout(timeoutFunction, 300000);
//alerts user the time is up and diables the buttons
function timeoutFunction() {
	alert('Your time is up!');
	$('button').prop("disabled",true);
}
//timer for the price change of each fruit
var interval;
function myFunction (){
	interval = setInterval(callFruits, 15000);
}
//calls price change with the timer
function callFruits () {
	changeFruitPrice(apple);
	changeFruitPrice(orange);
	changeFruitPrice(banana);
	changeFruitPrice(grape);
}
//changes the fruit price
function changeFruitPrice (fruit) {
	var priceAdj = 0;
	//randomly chooses a value between -50 and 50
	priceAdj = randomNumber(-50,50);
	//turns it in to cents
	priceAdj /= 100;
	console.log("priceAdj", priceAdj);
	fruit.price +=priceAdj;
	//prevents the fruit price from going above 9.99 and below .50
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
