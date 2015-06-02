var add = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    }
  }
  return a + b;
}

// try {
//   add ("seven");
// }
// catch(e) {
//   document.writeln(e.name + ': ' + e.message);
// }

// Create myObject. Has value & increment method.
// Increment method takes optional param. If arg
// is not a number, then 1 is used by default.

var myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment(  );
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

myObject.double = function(  ) {
  var that = this;
  var helper = function (  ) {
    that.value = add(that.value, that.value)
  };

  helper(  );
};

myObject.double(  );
document.writeln(myObject.value);

// Make a try_it function that calls new add
// function incorrectly.

var try_it = function (  ) {
  try {
    add("seven");
  }
  catch (e) {
    document.writeln(e.name + ': ' + e.message);
  }
}

try_it (  );
