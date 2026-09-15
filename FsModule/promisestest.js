const { read } = require('fs');

const fs= require('fs').promises;

//method to create a file
async function writeFile() {
    try {
        await fs.writeFile('AsyncTryCatch.txt', 'This is Exp 2 Async Try Catch of FSD', 'utf-8');
        console.log('file created');
    } catch (err) {
        console.log('Error creating file', err);
    }
}
writeFile();

//method to read a file
async function readFile() {
    try {
        const data = await fs.readFile('AsyncTryCatch.txt', 'utf-8');
        console.log('Data:', data);
    } catch (err) {
        console.log('Error reading file', err);
    }
}
readFile();

//method to append data to a file
async function appendFile() {
    try {
        await fs.appendFile('AsyncTryCatch.txt', '\nThis is additional content.', 'utf-8');
        console.log('Data appended to file');
    } catch (err) {
        console.log('Error appending to file', err);
    }
}
appendFile();

//method to rename a file
async function renameFile() {
    try {
        await fs.rename('AsyncTryCatch.txt', 'tryCatch.txt');
        console.log('File renamed');
    } catch (err) {
        console.log('Error renaming file', err);
    }
}
renameFile();

async function newWriteFile() {
    try {
        await fs.writeFile('NewtryCatch.txt', 'This is Exp 2 Async Try Catch of FSD', 'utf-8');
        console.log('file created');
    } catch (err) {
        console.log('Error creating file', err);
    }
}
newWriteFile();

//method to delete file
async function deleteFile() {
    try{
        await fs.unlink('NewtryCatch.txt');
        console.log('File deleted');
    }catch(err){
        console.log('Error deleting file', err);
    }
}
deleteFile();