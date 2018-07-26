//1
let city = {
	capital: 'false',
	population: 213213,
	president: 'Pawel Dadun',
	ministers: ['Jakub Bem','Hugo Meissner','Albert Wojcik']

}

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.ministers);

//2
let person = {
	name: 'Maksym',
	age: 25,
	sayHello: function(){
		console.log('Hello!');
	}
}

console.log(person.name);
console.log(person.age);
person.sayHello();

//3
var timeMachine = {
	shape: 'square',
	model: 'lol4000',
	run: function(date, place){
		console.log('moving to ' + place + ' in ' + date);
	}

}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run(1993, 'infinity');

//4
var recipe = {
	title: 'Lody z wody',
	servings: 3
}

recipe.ingredients = ['Woda','Water','Ice ice baby'];

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredients);

//7
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log('does spoon exist? ' + spoon.isExist);
