exports.run = function(input) {
  console.log("Exercise #5");
    const fs = require('fs');
    
    fs.readdir(input.directory, (err, files) => {    
        console.log("Project contains "+files.length+" file(s) of tests");
    });
};
