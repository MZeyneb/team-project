
const user = document.querySelector(".side");
const foruser = document.querySelector(".forUser");
const inside = document.querySelector(".forUser .inside");
inside.style.top = "-88px"

user.addEventListener("click", function () {
    console.log(foruser);

    if (inside.style.top !== "-88px") {

        inside.style.top = "-88px";
    } else {
        console.log("b");

        inside.style.top = "170px";
    }
});






