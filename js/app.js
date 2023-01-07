const login = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector("#password");

const eye1 = document.querySelector(".eye1");
const eye2 = document.querySelector('.eye2');

const submit = document.querySelector('#submit');


eye1.addEventListener("click", ()=>{
    eye1.style.display = "none";
    eye2.style.display = "block";
    password.type = "text";
});

eye2.addEventListener("click", () => {
  eye2.style.display = "none";
  eye1.style.display = "block";
  password.type = "password";
});

setInterval(() =>{
    if (
      password.value.length >= 8 &&
      login.value.length >= 4 &&
      email.value.indexOf("@") >= 0 &&
      email.value.indexOf(".") >= 0
    ){
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
}, 1)


// let str = "Aloo"
// console.log(str.indexOf("a"));
// console.log(str.indexOf("o"));
// console.log(str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90);

// str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90;
// // transform: translateX(0);