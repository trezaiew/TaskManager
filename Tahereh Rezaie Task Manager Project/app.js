window.onload = function () {




    let input = document.querySelector(".form input");
    let btn = document.querySelector(".form button");
    let form = document.querySelector(".container .parent .form");
    let list = document.querySelector(".users ul");
    let icon = document.querySelectorAll(".icon");
    let exists = document.querySelector(".exists");
    let inputFilter = document.querySelector(".container .inputFilter");
    let buttonClear = document.querySelector("#buttonClear");
    let users;
    console.log(inputFilter);
    console.log(buttonClear);
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


        if (inputValue == "") {

            exists.innerHTML +=
                ` <div class="alert alert-danger" role="alert">
              <h4>Error!</h4><br>
              <p>Please fill out this field.</p>
          </div>` };




        users.push(inputValue);

        localStorage.setItem("users", JSON.stringify(users));
        const allUsers = JSON.parse(localStorage.getItem("users"));

        list.innerHTML +=
            `<li>${inputValue}<input type="checkbox" class="checkbox"><i class="fa fa-times icon" id="close"></li>`;
        console.log(users)

        input.value = "";

        icon = document.querySelectorAll(".icon");

        icon.forEach(function (item, i, arr) {
            item.addEventListener("click", myfunction)

        });

    });
    const allUsers = JSON.parse(localStorage.getItem("users"));
    allUsers.forEach(function (item) {

        list.innerHTML += `<li>${item}<input type="checkbox" class="checkbox"><i class="fa fa-times icon"></i></li>`;

    });

    icon = document.querySelectorAll(".icon");

    icon.forEach(function (item, i, arr) {
        item.addEventListener("click", myfunction)

    });


    inputFilter.addEventListener("keyup", function () {

        let items = document.querySelectorAll(".users ul li");

        items.forEach(element => {
            if (element.innerHTML.startsWith(inputFilter.value)) {
                element.style.display = `block`;
            }
            else {
                element.style.display = `none`;

            }
        });

    });

    buttonClear.addEventListener("click", function () {
        list.innerHTML = "";

    });
}