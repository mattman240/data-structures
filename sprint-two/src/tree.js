var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  //check the value against the target
  if (this.value === target) {
    //if match return true
    return true;
    //else check child value
  } else if (this.children.length > 0) {
    //loop through the children array
    for (var i = 0; i < this.children.length; i++) {
      //rerun each child object through contains
      if (this.children[i].contains(target) === true) {
        return true;
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
