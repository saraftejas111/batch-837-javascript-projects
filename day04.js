// Functions in JS :

// class Demo {
// public void m1(){
//    java
// } }

// Demo d1 = new Demo();  d1.m1() ;

// normal function :
function greet() {
  console.log("Hello.. Good Morning All..");
}

greet();

function sum(a, b) {
  return a + b;
}

let result = sum(3, 5);
console.log(result);

// Variable Function :

let addition = function (a, b) {
  console.log("sum = " + (a + b));
};

addition(44, 55);

let myMsg = function () {
  return "How are you?..";
};

console.log(myMsg());

// Arrow Function :  VVIMP (React Perspective)

function m1() {}

let m2 = function () {
  // real logic
};

m2 = function () {
  console.log("change logic");
};

const showReply = () => {
  console.log("I am fine...");
};

showReply();

const multiply = (a, b) => a * b;

console.log(multiply(3, 5));

const division = (a, b) => console.log("div = " + a / b);

division(18, 6);

// HOF
// IIFE : Immidieately Invoke Function Expression

(function () {
  console.log("IIFE function..");
})();


// callback function 


function process (callback) {
    callback() ;
}

function tejas () {
    console.log("Hello I am Tejas...")
}

process(() => tejas())

process(()=> console.log("Hello I am Kiran"))





// System.out.println("Hello World..") ; ;;;;;;;;;;;;;;

// ...
