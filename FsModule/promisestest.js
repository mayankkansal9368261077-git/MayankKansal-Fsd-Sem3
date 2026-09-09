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
