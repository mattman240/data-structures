

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this._count++;
  if (this._count >= this._limit * .75) {
    this.resize(this._limit * 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  //check if its empty so we don't overrite the existing data
  if (this._storage[index] === undefined) {
    //if empty put data in that bucket
    this._storage[index] = [[k, v]];
    //break out so we don't countinue
    return;
  }
  //look through the storage
  for (var j = 0; j < this._storage[index].length; j++) {
    //check if k is already assigned something
    if (this._storage[index][j][0] === k) {
      //set storage buket equal to a nested array with the key value pair
      this._storage[index] = [[k, v]];
    }
  }
  //push that data into the storage
  this._storage[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  //check the position of the item
  var index = getIndexBelowMaxForKey(k, this._limit);
  //loop through the bucket
  // console.log(this._storage[index])
  if (this._storage[index] !== undefined) {
    for (var j = 0; j < this._storage[index].length; j++) {
      //check if it matches what we are looking for
      if (this._storage[index][j][0] === k) {
        //return it
        return this._storage[index][j][1];
      }
    }
  }
  //if not then return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  this._count--;
  if (this._count <= this._limit * .5) {
    this.resize(Math.floor(this._limit * .9));
  }
  //get the index
  var index = getIndexBelowMaxForKey(k, this._limit);
  //loop mthrough the bucket
  for (var j = 0; j < this._storage.length; j++) {
    //if we find what we want we
    if (this._storage[index][j][0] === k) {
      //slice it out and return it
      return this._storage[index].splice(j, 1);
    }
  }
};

HashTable.prototype.resize = function (size) {
  this._limit = size;
  this._count = 0;
  var storage = this._storage;
  this._storage = LimitedArray(this._limit);
  // console.log('storage', this._storage);
  storage.each(function(obj) {
    // console.log('----->', obj);
    for (var key in obj) {
      var hashKey = getIndexBelowMaxForKey(key, this._limit);
      if (!this._storage[key]) {
        var tempObj = {};
        tempObj[key] = obj[key];
        this._storage[hashKey] = tempObj;
        this._count++;
      } else {
        this._storage[hashKey][key] = obj[key];
        this._count++;
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
