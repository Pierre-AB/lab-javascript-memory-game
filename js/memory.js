class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairClicked = 0
    this.pairsGuessed= 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    var i, tmp;
    console.log(i, tmp)
    for (i = this.cards.length - 1; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        console.log(randomIndex)
        tmp = this.cards[i];
        console.log(this.cards[i])
        this.cards[i] = this.cards[randomIndex];
        this.cards[randomIndex] = tmp;
    }
    return this.cards;
    
  }
  checkIfPair(card1, card2) {}
  isFinished() {}
}