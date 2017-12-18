var pizzaBuslaev = {
	title: "Буслаев",
	radius1: 30,
	radius2: 40,
	price1: 110,
	price2: 175,
	description: "Состав: итальянские томаты, руккола, моцарелла, итальянское мясо Di Parma",
	img:src	= "images/assortment/pizzaBuslaev.jpg",
};
var pizzaChichina = {
	title: "Чичина",
	radius1: 30,
	radius2: 40,
	price1: 110,
	price2: 175,
	description: "Состав: сливки, моцарелла, лук, бекон",
	img:src	= "images/assortment/pizzaChichina.jpg",
};
var pizzaDandelion = {
	title: "Одуванчик",
	radius1: 30,
	radius2: 40,
	price1: 110,
	price2: 175,
	description: "Состав: сливки, ветчина, салями, бекон, куриное мясо, лук",
	img:src	= "images/assortment/pizzaDandelion.jpg",
};
var pizza = [pizzaBuslaev, pizzaChichina, pizzaDandelion]

$('#myCarousel').carousel({
        interval: 50
    });