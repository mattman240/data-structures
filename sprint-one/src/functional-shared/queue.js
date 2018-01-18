var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.secondCounter = 0;

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    if (this.counter > 0) {
      var temp = this.storage[this.secondCounter];
      delete this.storage[this.secondCounter];
      this.secondCounter++;
    }
    return temp;
  },
  size: function() {
    if (this.secondCounter < this.counter) {
      return this.counter - this.secondCounter;
    } else {
      return 0;
    }
  }
};
