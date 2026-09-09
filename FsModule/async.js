import Fs from 'fs';

//method to create a file
Fs.writeFile('AsyncText.txt','This is Exp 2 Async of FSD','utf-8',(err)=>{
    if(err){
        console.log('Error creating file',err);
        return;
    }
    console.log('file created');
});

//method to read a file
Fs.readFile('AsyncText.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file :',err);
        return;
    }
    console.log(`Data: ${data}`);
});

//method to append data to file
Fs.appendFile('AsyncText.txt','\nThis is the appended data','utf-8',(err)=>{
    if(err){
        console.log('Error appending data :',err);
        return;
    }
    console.log('Data appended successfully :');
});

//method to delete a file
Fs.writeFile('AsyncText2.txt','This is a new file','utf-8',(err)=>{
    if(err){
        console.log('Error creating file :',err);
        return;
    }
    console.log('File created :');
});
Fs.unlink('AsyncText2.txt',(err)=>{
    if(err){
        console.log('Error deleting file :',err);
        return;
    }
    console.log('File deleted successfully :');
});


Fs.readFile('AsyncText.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error reading file :',err);
        return;
    }
    console.log(`Data: ${data}`);
});