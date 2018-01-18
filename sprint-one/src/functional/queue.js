var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var secondCounter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if (counter - secondCounter > 0) {
      var result = storage[secondCounter];
      delete storage[secondCounter];
      secondCounter++;
    }
    return result;
  };


  someInstance.size = function() {
    return counter - secondCounter;
  };

  return someInstance;
};
