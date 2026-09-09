import Fs from 'fs';

//method to create a file
Fs.writeFileSync('Text.txt','This is Exp 2 of FSD','utf-8');
console.log('file created');

//method to read a file
let data = Fs.readFileSync('Text.txt','utf-8');
console.log(`Data: ${data}`);

//method to append data to a file
Fs.appendFileSync('Text.txt','\nThis is the appended data','utf-8');
data = Fs.readFileSync('Text.txt','utf-8');
console.log(`Data after appending:\n ${data}`);

//create new file
Fs.writeFileSync('NewFile.txt','This is a new file','utf-8');
console.log('File created');

//method to delete a file
Fs.unlinkSync('NewFile.txt');
console.log('File deleted');

//make folder  
Fs.mkdirSync('FOLDER');  // Folder dont overwrite if already exists
console.log('Folder created');

//Delete folder
Fs.rmdirSync('FOLDER');
console.log('Folder deleted');

if(Fs.existsSync('Text.txt')) {
    console.log('File exists');
}
else{
    console.log('File does not exist');
}