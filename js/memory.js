class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    // this.cards.sort(function () {
    //   return Math.random() - .5; // [-.5----.5]
    // })
    var i, tmp;
    console.log(i, tmp);
    for (i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      tmp = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = tmp;
    }
    return this.cards;
  }


  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }
  isFinished() {
    // this.pairsGuessed === 12 ? true : false

    if (this.pairsGuessed === 12) {
      return true
    }
    return false
  }
}