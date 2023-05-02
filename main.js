// Javascript Steps
// #1 Target id & classes
// #2 add Event Listener - > Submit
// #3 engine function
// #4 test the system   




  
// let id  = (id) => {
//   return document.getElementById(id)
// }


// let  username = document.getElementById('username'),
// email = document.getElementById('email'),
// password = document.getElementById("passsword");
// errorMsg  = document.getElementsByClassName("error");
// successIcon = document.getElementsByClassName("success-icon");
// failureIcon = document.getElementsByClassName('failure-icon');



// Use single line arrow fn without return keyword to make code shorter
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);


// Assign values to keyword names using the DRY principle
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  // To prevent flickering behaviour
  e.preventDefault();


  validateInput(username, 0, "Username Cannot be blank");
  validateInput(email, 1, "Email Cannot be blank");
  validateInput(password, 2, "Password Cannot be blank");
});


  let validateInput = (input, index, message) => {
    // use .trim to remove whitespaces
    if (input.value.trim() === "") {
      errorMsg[index].innerHTML = message;
      failureIcon[index].style.opacity = "1";
      successIcon[index].style.opacity = "0";
    } else {
      errorMsg[index].innerHTML = "";
      successIcon[index].style.opacity = "1";
      failureIcon[index].style.opacity = "0";
    }
  }
  // console.log(failureIcon);
