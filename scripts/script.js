// Laura Paglione (MENTOR)
// Nanohacker Academy
// Fall 2018: JS.01
// March, 2018
// scripts/script.js

//Test to see if this is working - put a message into the console
console.log("Javascript file is correctly linked!")

//function to hide the image
$(".hide").click( () => {
  $(".img").hide();
});

//function to show the image
$(".show").click( () => {
  $(".img").show();
});

//Challenge 9
let myInt = 7;
let myString = "the number 7";
let myNumString = "7";

$(".compute").click( () => {
  //myInt + myInt = 14
  console.log(`myInt + myInt = ${myInt + myInt}`);

  //myInt + myString = "7the number 7"
  console.log(`myInt + myString = ${myInt + myString}`);

  //myInt + myNumString = "77"
  console.log(`myInt + myNumString = ${myInt + myNumString}`);

  //myNumString + myInt = "77"
  console.log(`myNumString + myInt = ${myNumString + myInt}`);

  //myInt + myNumString + myString = "77the number 7"
  console.log(`myInt + myNumString + myString = ${myInt + myNumString + myString}`);

  //myInt + myInt + myString = "14the number 7"
  console.log(`myInt + myInt + myString = ${myInt + myInt + myString}`);

  //myString + myInt + myInt = "the number 777"
  console.log(`myString + myInt + myInt = ${myString + myInt + myInt}`);

  //myInt - myString = NaN (Not a Number)
  console.log(`myInt - myString = ${myInt - myString}`);

  //myInt - myNumString = 0
  console.log(`myInt - myNumString = ${myInt - myNumString}`);

  //myString - myNumString = NaN
  console.log(`myString - myNumString = ${myString - myNumString}`);

  //myInt == myNumString = true
  console.log(`myInt == myNumString is ${myInt == myNumString}`);

  //myInt === myNumString = false
  console.log(`myInt === myNumString is ${myInt === myNumString}`);
})

//Challenge 10
$("#display").click( () => {
  let name = $("input#name").val();
  $("p.challenge10").append(`<br> Hi there ${name}!`);
})
