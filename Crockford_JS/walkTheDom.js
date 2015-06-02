// Define walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from given node. Invokes function, passing it
// each node in turn. walk_the_DOM calls itself to
// process each of the children nodes.

var walk_the_DOM = function walk(node, func) {
  func (node);
  node = node.firstChild;
  while (node) {
    walk (node, func);
    node = node.nextSibling;
  }
};

// Define getElementsByAttribute function. Takes
// attribute name string & optional matching value.
// Calls walk_the_DOM, passing a function that
// looks for an atttribute name in the node.
// Matching nodes are accumulated in a results array.

var getElementsByAttribute = function (att, value) {
  var results = [];

  walk_the_DOM(document.body, function (node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });

  return results;
}


// Make factorial function with tail recursion. it
// is tail recursion b/c it returns result of calling
// itself.
// JS doesn't currently optimize this form.

var factorial = function factorial(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial (i - 1, a * i);
};

document.writeln(factorial(4));
