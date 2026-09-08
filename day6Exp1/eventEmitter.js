import eventEmitter from 'events';

const myEmitter = new eventEmitter();

myEmitter.on("greet",(name) => {
    console.log(`Hello, ${name}! welcome to node.js`)
});

myEmitter.on("exit",() => {
    console.log(`App Closed`)
});

myEmitter.emit("greet", "Mayank");
myEmitter.emit("exit")