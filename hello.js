"use strict";

let user = {
    name : this.name,
};

function setName() {
    user.name = prompt("Enter your name", "Anonimus");
}

function helloUser() {
    alert(`Hello, ${user.name}`);
}

setName();
helloUser();