const Hangman = function(word, guesses) {
  this.word = word;
  this.guesses = guesses;
};

const wordOne = new Hangman("Hangman", 2);
console.log(wordOne);

const wordTwo = new Hangman("Game", 3);
console.log(wordTwo);
