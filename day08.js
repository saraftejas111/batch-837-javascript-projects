console.log("hello day 08");

// int [] arr = {1,2,3,4,5}

fruits = ["mango", "apple", "banana", "grapes", 512, true, "kiwi", null];

// traditional for loop

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for in  loop
console.log("----- for in loop ----------");

for (v in fruits) {
  console.log(fruits[v]);
}

console.log("----- for of loop ----------");

for (let values of fruits) {
  console.log(values);
}

// map
console.log("----- using map ----------");

let results = fruits.map((e) => e);

console.log(results);

// create 10 employees object of id,name,role & salary
// iterate it by using map
// print onlyemployees whose role is developers

let emp1 = { id: 4, name: "raj patil", role: "dev", salary: 123456 };
let emp2 = { id: 1, name: "karan sharma", role: "tester", salary: 123456 };
let emp3 = { id: 5, name: "tina kohli", role: "dev", salary: 123456 };
let emp4 = { id: 3, name: "neha jaydev", role: "tester", salary: 123456 };
let emp5 = { id: 2, name: "uday varma", role: "dev", salary: 123456 };

console.log(emp1.name);

// task : using regex, perform validation, check

const checkEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let em = document.querySelector("#em").value;

  let m = document.querySelector("#em-msg");

  if (emailRegex.test(em)) {
    m.innerHTML = "Email is Correct...";
    return true;
  } else {
    m.innerHTML = "InCorrect email...";
    return false;
  }
};
const checkPassword = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  let p = document.querySelector("#pass").value;
  let m = document.querySelector("#ps-msg");
  if (passwordRegex.test(p)) {
    m.innerHTML = "Password is Correct...";
    return true;
  } else {
    m.innerHTML = "InCorrect Password...";
    return false;
  }
  console.log("pass function");
};
const checkMobile = () => {
  const mobileRegex = /^[6-9]\d{9}$/;
  let num = document.querySelector("#num").value;
  let m = document.querySelector("#num-msg");
  if (mobileRegex.test(num)) {
    m.innerHTML = "Mobile Number is Correct...";
    return true;
  } else {
    m.innerHTML = "InCorrect Mobile Number...";
    return false;
  }  
  console.log("mobile function");
};
const checkLogin = () => {
  let m = document.querySelector("#msg");
  if (checkEmail() && checkPassword() && checkMobile()) {
    m.innerHTML = "LOGIN SUCCESS";
    m.style.color = "blue";
  } 
  else if (checkEmail() && checkPassword() ) {
    m.innerHTML = "Mobile is Incorrect";
    m.style.color = "red";
  } 
    else if (checkEmail() && checkMobile() ) {
    m.innerHTML = "Password is Incorrect";
    m.style.color = "red";
  } 

      else if (checkPassword() && checkMobile() ) {
    m.innerHTML = "Email is Incorrect";
    m.style.color = "red";
  } 
  
  else {
    m.innerHTML = "LOGIN FAILED.. ALL is Incorrect";
    m.style.color = "red";
  }
  console.log("login function");
};
