"use strict";

function fuck(num) {
    return +String(num).split("")
                       .reverse()
                       .join("");
}