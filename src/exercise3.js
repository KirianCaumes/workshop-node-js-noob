exports.run = function(input) {
  console.log("Exercise #3");
    var total = 1;
    for(var i = 0; i<input.length; i++){
        if (input[i].multiply === true ){
            total *= input[i].value;
        }
    }
    return total;
};
