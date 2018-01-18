var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.counter = 0;
  newQueue.counter2 = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > this.counter2) {
    var temp = this.storage[this.counter2];
    delete this.storage[this.counter2];
    this.counter2++;
  }
  return temp;
};

queueMethods.size = function() {
  return this.counter - this.counter2;
};
