///////////////////////////////////////////////////
//  NINJA CLASS
///////////////////////////////////////////////////

//  //// NINJA CLASS //////////////////////////////
class Ninja {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    //  **** Say Name Method ******************
    //  Logs the Ninja's name to the console
    sayName() {
        console.log("Ninja name:", this.name);
    }

    //  **** Show Stats Method *****************
    //  Shows the Ninja's name, strength, speed, and health
    showStats() {
        console.log("Ninja name:", this.name, "| strength:", this.strength, "| speed:", this.speed, "| health:", this.health);
    }

    //  **** Drink Sake Method *****************
    //  Adds 10 Health to Ninja
    drinkSake() {
        this.health += 10;
        console.log(this.name, "drinks sake")
    }
}

class Sensei extends Ninja {
    constructor (name) {
        super (name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    //  **** Speak Wisdom Method ****************
    //  Calls drinkSake from the Ninja class before displaying a wise message
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

//  //// MAIN EXECUTABLE SECTION //////////////////

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
