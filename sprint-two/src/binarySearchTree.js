var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;

  obj.insert = function(input) {
    if (input === obj.value) return 'ERROR';
    var side = input < obj.value ? 'left' : 'right';
    if (obj[side]) {
      obj[side].insert(input);
    } else {
      obj[side] = BinarySearchTree(input);
    }

  };

  obj.contains = function(input) {     
    if (obj.value === input) return true; 
    var side = input < obj.value ? 'left' : 'right';
    if (obj[side]) {
      return obj[side].contains(input);
    } else {
      return false;
    }
  };

  obj.depthFirstLog = function(func) {
    func(obj.value);
    if (obj.left) obj.left.depthFirstLog(func);
    if (obj.right) obj.right.depthFirstLog(func);
  };

  obj.traverseInOrder = function(node, func) {
    if (node === null) return;
    obj.traverseInOrder(node.left, func); 
    func(node.value);
    obj.traverseInOrder(node.right, func);
  };
  
  obj.breadthFirstLog = function(func) {
    var queue = Queue();    
    queue.enqueue(obj);
    while (queue.size() > 0) {
      var current = queue.dequeue();
      func(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
  };

  return obj;
};

var Queue = function(){
  var someInstance = {};

  var storage = {};
  var end = 0;
  var start = 0;

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    if (end - start) {
      var result = storage[start];
      delete storage[start];
      start++;
      return result;
    }
  };

  someInstance.size = function(){
    return end - start;
  };
  return someInstance;
};


/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log(n))
contains: O(log(n)) 
depthFirstLog: O(n)
breadthFirstLog: O(n)
 */
