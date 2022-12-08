let input = document.querySelector(".form input");
let btn = document.querySelector(".form button");
let form = document.querySelector(".parent .form");
let list = document.querySelector(".users ul");
let icon = document.querySelectorAll(".icon");
let exists = document.querySelector(".exists");
let inputFilter = document.querySelector(".inputFilter");

let users;
console.log(inputFilter);

function myfunction() {


    this.parentElement.remove();


};

if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
} else {
    users = [];
}


form.addEventListener("submit", function (e) {

    e.preventDefault();
   
    let inputValue = input.value;

    let similar;
    if (similar = users.find(element => element == input.value)) {

        console.log(Array(similar))
        exists.innerHTML +=
            `<div class="alert alert-warning" role="alert">
                                 Someone already has that username! <a href="#" class="alert-link">Try another?</a>. Give it a click if you like.
                               </div>` };




    users.push(inputValue);

    localStorage.setItem("users", JSON.stringify(users));
    const allUsers = JSON.parse(localStorage.getItem("users"));

    list.innerHTML +=
           `<li>${inputValue}<i class="fa fa-times icon" id="close" onclick="myfunction"></li>`;
    console.log(users)

    input.value = "";

    icon = document.querySelectorAll(".icon");

    icon.forEach(function (item, i, arr) {
        item.addEventListener("click", myfunction)

    });

});
const allUsers = JSON.parse(localStorage.getItem("users"));
allUsers.forEach(function(item) {

    list.innerHTML += `<li>${item}<i class="fa fa-times icon"></i></li>`;

});

icon = document.querySelectorAll(".icon");

icon.forEach(function (item, i, arr) {
    item.addEventListener("click", myfunction)

});


inputFilter.addEventListener("keyup", function () {

  let items = document.querySelectorAll(".users ul li");

  items.forEach(element=>{
    if (element.innerHTML.startsWith(inputFilter.value)) {
        element.style.display = `block`;
    }
    else {
        element.style.display = `none`;
        
    }
  });

});
