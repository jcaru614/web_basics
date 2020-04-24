class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('the ninjas name is ' + this.name);
        
    }
    showStats() {
        console.log('ninja has: ' + this.name, this.strength, this.speed, this.health);
    }
    drinkSake() {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa", 65);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log(ninja1);
