var add = function (a, b) {
  return a + b;
}

// // Create constructor function called Quo.
// // Makes object with a status property.
// var Quo = function (string) {
//   this.status = string;
// };

// Create maker function called quo. Makes
// object with a get_status method and private
// status property.
var quo = function (status) {
  return {
    get_status: function ( ) {
      return status;
    }
  };
};

// Make an instance of quo.
var myQuo = quo("amazed");
document.writeln(myQuot.get_status( ));



//
//
// // Give all instances of Quo a public method
// // called get_status.
// Quo.prototype.get_status = function (  ) {
//   return this.status;
// };
//
// // Make an instance of QUo.
// var myQuo = new Quo("confused");
// document.writeln(myQuo.get_status(  ));
//
// // Make array of 2 numbers & add them.
// var array = [3, 4];
// var sum = add.apply(null, array);
// document.writeln(sum);
//
// // Make object with a status member.
// var statusObject = {
//   status: 'A-OK'
// };
//
// // statusObject doesn't inherit from Quo.prototype,
// // but we can invoke get_status method on statusOjbect
// // even though statusObject doesn't have get_status
// // method.
// var status = Quo.prototype.get_status.apply(statusObject);
// document.writeln(status);
