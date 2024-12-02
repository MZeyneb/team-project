
import { BASE_URL } from "./constants.js";
const user = document.querySelector(".side");
const foruser = document.querySelector(".forUser");
const inside = document.querySelector(".forUser .inside");

async function getAllData() {

    const res = await axios(`${BASE_URL}/companies`)
    drawCompanies(res.data)
    
}

const cardsjobs = document.querySelector(".cardsComp")
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
    cardsjobs.innerHTML = "";
    arr.forEach(element => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML=`

                <h3>${element.name}</h3>
                <p>${element.industry}</p>



        `
        cardsjobs.appendChild(card)
        
    });

}


getAllData()