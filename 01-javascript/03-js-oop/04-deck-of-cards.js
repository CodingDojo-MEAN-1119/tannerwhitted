//Assignment: Deck of Cards
//Create a Card class. A card should have the following functionality:

//Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
//Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
//Each Card should have a numerical value (1-13)
//Each Card should have a show method (log the card's information to the console)
//Create a Deck class. A deck should have the following functionality:

//The Deck should contain the 52 standard Cards
//The Deck should be able to shuffle
//The Deck should be able to reset
//The Deck should be able to deal a random Card
//Deal should return the Card that was dealt and remove it from the Deck
//Now create a Player class. A Player should have the following functionality:

//The Player should have a name
//The Player should have a hand (an array of cards taken from a Deck)
//The Player should be able to take a Card (use the deck.deal method)
//The Player should be able to discard a Card

class Deck {
    constructor(){
        this.deck = [];
    }
    reset () {
        this.deck = [];
        const suits = [`Hearts`, `Clubs`, `Diamonds`, `Spades`];
        const values = [`Ace`, 2,3,4,5,6,7,8,9,10, `Jack`, `Queen`, `King`];
        
        for(const suit of suits){
            for(const value of values){
                this.deck.push(`${value} of ${suit}`);
            }
        }
    return this;
    }

    shuffle () {
        let m = this.deck.length,i,t;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
    return this;
    }
    deal () {
        return this.deck.pop();
    }
}
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
}
const deck1 = new Deck();
deck1.reset().shuffle();
console.log(deck1);

const player1= new Player(`Rounder`);
player1.draw(deck1).draw(deck1);
console.log(player1.name);
console.log(player1.hand);