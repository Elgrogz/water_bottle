var athlete = {
  hydration: 100,
  distance: 0,
  run: function() {
    if (this.hydration != 0) {
      this.hydration -= 10;
      this.distance += 10;
    } else {
      return "I'm thirsty!";
    }
  },
  drink: function(quantity) {
    this.hydration += quantity;
  }
}



module.exports = athlete;