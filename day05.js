console.log("hello day 05 js");

// + - * / %
// ! && ||
// ++ --
// =   a +=5    b -= 3

// == , ===

let a = "5";

let b = 5;

console.log("let a = '5' \nlet b = 5 ; ");

console.log("a == b --> " + (a == b)); //

console.log("a === b --> " + (a === b)); //

// == use to compare the values with not respect to data type
// === use to compare the values with respect to data type

// ternary operator :  VVIMP (React Perspective)

let num = 51;

let grade =
  num >= 90
    ? "Grade A"
    : num >= 80
      ? "Grade B"
      : num >= 70
        ? "Grade C"
        : num >= 60
          ? "Grade D"
          : "FAIL";

console.log(grade);

// DOM : document object model

// events : functions

function change() {
  let t = document.querySelector("h1");

  if (t.innerHTML == "Welcome to Day 05") {
    t.innerHTML = "Change By DOM";
    t.style.backgroundColor = "red";
  }
  
  else if (t.innerHTML == "Change By DOM") {
    t.innerHTML = "DOM Manipulation";
    t.style.backgroundColor = "blue";
  } 
  
  else if (t.innerHTML == "DOM Manipulation") {
    t.innerHTML = "Document & querySelector";
    t.style.backgroundColor = "green";
  } 
  
  else {
    t.innerHTML = "Welcome to Day 05";
    t.style.backgroundColor = "yellow";
  }

  console.log("change button clicked...");
}

// landing --> welcome to day 05   -- yellow
// 1st click --> change by dom -- red
// 2nd click --> dom manipulation   -- blue
// 3rd click --> welcome to day 05   -- yellow
// and repeat
