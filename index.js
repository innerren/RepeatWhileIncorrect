"use strict";
let num = null;
let enteredDate = "";

do {
  enteredDate = prompt("please enter a number more than 100", "number");
  if (!isNaN(enteredDate) && enteredDate != null) {
    num = parseFloat(enteredDate);
  } else {
    num = null;
  }
} while (!(num >= 100 || enteredDate == null || enteredDate == ""));
alert(`You enter ${num}`);
