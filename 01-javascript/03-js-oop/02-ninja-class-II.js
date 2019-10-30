function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
        return this;
        }
    }

    Ninja.prototype.punch = function(ninja1){
        this.health -= 5;
        console.log(ninja1.name + " was punched by " + ninja2.name + " and lost 5 health");
        return this;
    }

    Ninja.prototype.sayName = function(){
        console.log("My name is " + this.name);
        return this;
    }

    Ninja.prototype.drinkSake = function(){
        this.health += 10;
        return this;
    }

    const ninja1 = new Ninja("Chun Li");
    const ninja2 = new Ninja("Ryu");
    ninja1.sayName();
    ninja1.drinkSake();
    ninja1.showStats();
    ninja1.drinkSake();
    ninja1.punch(ninja2);
    ninja1.showStats();