
let city = {
	capital: 'false',
	population: 213213,
	president: 'Pawel Dadun',
	ministers: ['jakub Bem','Hugo Meissner','Albert Wojcik']

}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.ministers);

let maksym = {
	name: 'Maksym',
	age: 25,
	sayHello: function(){
		console.log('Hello!');
	}
}

var timeMachine = {
	shape: 'square',
	model: 'lol',
	run: function(date, place){
		console.log('moving to' + place + ' in ' + date);
	}

}

var recipe = {
	title: 'Lody z wody',
	servings: 3
}

recipe.ingredients = ['Woda','Water','Ice ice baby'];

//for(var key in movie ){
//	console.log(key, movie[key]);
//}

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log('does spoon exist? ' + spoon.isExist);
