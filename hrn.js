"use strict";

function hrn(num) {

    let digitsAndTeens = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fiveteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let tens = {
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let bigDivisions = {
        15: "quadrillion",
        12: "trillion",
        9: "billion",
        6: "million",
        3: "thousand",
        0: "",
    };

    if (num == 0) return "zero";
    let str = num < 0 ? "minus " : "";
    if (num < 0) num *= -1;
    let powerOfTen = 15;
    while (num > 0) {
        let temp = cycle(Math.floor(num / (10 ** powerOfTen)));
        if (temp) str += temp + " " + bigDivisions[powerOfTen] + " ";
        num = num % (10 ** powerOfTen);
        powerOfTen -= 3;
    }
    return str.trim();


    function cycle(num) {
        if (num == 0) return null;
        if (num < 20) return digitsAndTeens[num];
        if (num < 100) return tens[Math.floor(num / 10)] +
                              (num % 10 == 0 ? "" : " " + cycle(num % 10));
        if (num < 1000) return digitsAndTeens[Math.floor(num / 100)] +
                               " hundred " +
                               (num % 100 == 0 ? "" : cycle(num % 100));
    }

}


