const fs = require('fs');

//creating a folder
fs.mkdirSync('CURD');

//Creating a file
fs.writeFileSync('CURD/Vansh.txt', 'Hello World..!');

//Update in a file
fs.appendFileSync('CURD/Vansh.txt', ' My Name is Vansh Gupta');

//Rename a file
fs.renameSync('CURD/Vansh.txt', 'CURD/VanshGupta.txt');

//Delete a file
fs.unlinkSync('CURD/VanshGupta.txt');

//Delete a Folder
fs.rmdirSync('CURD');