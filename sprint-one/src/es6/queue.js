class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.counter2 = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  dequeue() {
    if (this.counter > this.counter2) {
      var temp = this.storage[this.counter2];
      delete this.storage[this.counter2];
      this.counter2++;
    }
    return temp;
  }

  size() {
    if (this.counter > 0) {
      return this.counter - this.counter2;
    } else {
      return 0;
    }
  }

}
