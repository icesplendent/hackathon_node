class Person {
	constructor (name , age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`Hello from ${this.name}`);
	}
}

module.exports = Person;
