console.log("hello day 07 js");

function check() {
  let uname = document.getElementById("un").value;

  let pass = document.querySelector("#pass").value; //

  let message = document.getElementById("msg");

  console.log(uname);
  console.log(pass);

  if (uname == "tejas" && pass == "tka123") {
    console.log("login success..");
    message.innerHTML = "LOGIN SUCCESS..";
    message.style.color = "blue";
  } else {
    console.log("login failed..");
    message.innerHTML = "LOGIN FAILED..";
    message.style.color = "red";
  }

  console.log("button is working...");
}
