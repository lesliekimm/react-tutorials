// Function.prototype.method = function (name, func) {
//   this.prototype[name] = func;
//   return this;
// };

// Add a method conditionally
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};
//
// Number.method('integer', function ( ) {
//   return Math[this < 0 ? 'ceiling' : 'floor'](this);
// });

// document.writeln((-10 / 3).integer( )); // -3

String.method('trim', function ( ) {
  return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + " neat ".trim( ) + '"');
