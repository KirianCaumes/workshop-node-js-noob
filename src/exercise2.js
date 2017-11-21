exports.run = function(input) {
  console.log("Exercise #2");
    var nombres = input.split('').map(function(item) {
        return parseInt(item, 10);
    });
    var max = nombres.reduce(function(a,b) {
      return Math.max(a, b);
    });
   return(max);
};
