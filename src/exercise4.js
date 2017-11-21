exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE
    var repeat = true;
    var input = function yolo(time, string, other) {
        output = "";
        if (repeat === true) {
            for(var i = 0; i<time; i++){
                output += string+", ";
            }
            return output.substring(0, output.length-2);  //Supprime la derniere virgule          
        }        
    }
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
