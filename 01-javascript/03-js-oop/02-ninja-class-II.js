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

    Ninja.prototype.punch = function(ninja){
        ninja.health = ninja.health - 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 health");
        return this;
    }

    Ninja.prototype.kick = function(ninja){
        const damage = this.strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " health");
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
    ninja1.showStats();
    ninja2.showStats();



    ninja2.punch(ninja1);

    ninja1.kick(ninja2);

    ninja1.showStats();
    ninja2.showStats();