var BinarySearchTree = function(value) {
  var instanceOf = Object.create(bstMethod);
  instanceOf.left = null;
  instanceOf.right = null;
  instanceOf.value = value;
  return instanceOf;
};
var bstMethod = {
  //function that takes in a target and insterst it into the tree
  insert: function (target) {
    //make a new tree
    var newTree = BinarySearchTree(target);
    //if exists break out of function
    if (target === this.value) {
      return;
      //else check value to see left or right
    } else if (target < this.value) {
      //build a new tree with that value if you find it's spot
      if (this.left === null) {
        this.left = newTree;
      } else {
        //insert it into the left tree
        this.left.insert(target);
      }
      //else insert into right
    } else if (target > this.value) {
      if (this.right === null) {
        //build another new tree
        this.right = newTree;
      } else {
        //then set the value;
        this.right.insert(target);
      }
    }
  },
  contains: function (target) {
    //set a var to false
    var result = false;
    //check base case of first value being the target
    if (this.value === target) {
      //if true set result to true
      result = true;
    } if (target < this.value) {
      //split left or right depending on the current node and target value
      if ((this.left !== null) && (this.left.contains(target))) {
        result = true;
      }
    } if (target > this.value) {
      if ((this.right !== null) && (this.right.contains(target))) {
        result = true;
      }
    }
    //if nothing equals the target return false
    return result;
  },
  depthFirstLog: function(callback) {
    //make a helper function
    var helpFunc = function(node) {
      //apply the callbackto the nodes value
      callback(node.value);
      if (node.left !== null) {
        helpFunc(node.left);
      } if (node.right !== null) {
        helpFunc(node.right);
      }
    };
    //recurse the helper function
    helpFunc(this);
  },
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// insert - logarithmic
// contains - logarithmic
// depthFirstLog - logarithmic
