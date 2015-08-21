var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value, this);
  this.children.push(child);
  return child;
};

treeMethods.removeFromParent = function() {
  var indexInParent = this.parent.children.indexOf(this);
  this.parent.children.splice(indexInParent, 1);
  var removedParent = this.parent;
  this.parent = null;
  return removedParent;
}


treeMethods.contains = function(target){
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target || this.children[i].contains(target)) {
      return true;
    }
  }
  return false;

};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild : 0(1);
 contains : 0(n);
 */
