var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.secondCounter = 0;
};

Queue.prototype.enqueue = function(item) {
  this.storage[this.counter] = item;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.secondCounter];
  delete this.storage[this.secondCounter];
  this.secondCounter++;
  return temp;
};

Queue.prototype.size = function() {
  if (this.counter > this.secondCounter) {
    return this.counter - this.secondCounter;
  } else {
    return 0;
  }
};
