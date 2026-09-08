import eventEmitter from 'events';

class Button extends eventEmitter {}

const myButton = new Button();

myButton.on("click", () => {
    console.log("Button clicked!");
});

myButton.on("mouseover", () => {
    console.log("Mouse over the button!");
});

myButton.emit("click");
myButton.emit("mouseover");