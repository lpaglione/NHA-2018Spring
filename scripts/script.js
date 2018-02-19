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
  //
})
