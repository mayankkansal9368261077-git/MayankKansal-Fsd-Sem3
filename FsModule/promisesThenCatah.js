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
