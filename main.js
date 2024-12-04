import { BASE_URL } from "./constants.js";
const user = document.querySelector(".side");
const foruser = document.querySelector(".forUser");
const inside = document.querySelector(".forUser .inside");

const nav = document.querySelector("nav")
nav.style.height = "80px"

const menu = document.querySelector(".menu")
menu.addEventListener("click", () => {
    if (nav.style.height == "80px") {
        nav.style.height = "320px"
    } else {
        nav.style.height = "80px"
    }
})


async function getAllData() {

    const res = await axios(`${BASE_URL}/companies`)
    drawCompanies(res.data.slice(0, 7))

    const res2 = await axios(`${BASE_URL}/vacancies`)
    drawJobs(res2.data.slice(0, 7))

}




const cardsComp = document.querySelector(".cardsComp")
const cardsjobs = document.querySelector(".cardsJobs")

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


function drawCompanies(arr) {
    cardsComp.innerHTML = "";
    arr.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
                <div class="pic">
                <img src="${element.image}">
                </div>
                <h3>${element.name}</h3>
                <p>${element.industry}</p>



        `
        cardsComp.appendChild(card)

    });

}



function drawJobs(arr) {
    cardsjobs.innerHTML = "";
    arr.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
                <div class="pic">
                <img src="${element.image}">
                </div>
                <h3>${element.title}</h3>
                <p>${element.employmentType}</p>



        `
        cardsjobs.appendChild(card)

    });
}


getAllData()
