"use strict";

let user = {
    name : this.name,
};

function setUserName() {
    let inputName = prompt("Enter your name", "Anonimus");
    if (inputName == null) {
        alert("No, no, no, not so easy! You should enter your name!");
	setUserName();
    }
    else user.name = inputName;
}

function helloUser() {
    alert(`Hello, ${user.name}`);
}

function beCarefulUser() {
    alert(`Look, ${user.name}, you'd better give me the highest score for my CV, or you'll be in big trouble!`);
}

setUserName();
helloUser();
beCarefulUser();