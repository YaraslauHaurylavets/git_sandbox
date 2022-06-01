"use strict";

let user = {
    name : this.name,
};

function setUserName() {
    user.name = prompt("Enter your name", "Anonimus");
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