var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    if (!list.head) {
      list.head = list.tail;
    }
    list.head.next = list.tail;
    return list.tail;
  };

  list.removeHead = function() {
    //check if we even have a head
    if (list.head !== null) {
      var temp = list.head;
      if (!list.head) {
        list.tail = null;
        delete temp;
      }
      list.head = list.head.next;
      return temp.value;
    }


  };

  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 add === O(1)
 remove === O(1)
 contains === O(n)


 */
