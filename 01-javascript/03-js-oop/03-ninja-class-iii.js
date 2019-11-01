class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
        console.log(`you created a ninja!`);
    }
    sayName() {
        console.log(`Hello ${this.name}`)
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 5
        console.log(`${this.name} drank sake and how has ${this.health} health.`)
    }
}
class Supersensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name);
        this.health = 200;
        this.speed = 5;
        this.strength = 5;
        this.wisdom = 5;
        console.log(`you created a super sensei!`)
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`${this.name} says a wise message after drinking sake`)
    }
}

const ninja1 = new Ninja('akuma');
const sensei1= new Supersensei(`oni`);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei1.sayName();
sensei1.speakWisdom();
sensei1.showStats();