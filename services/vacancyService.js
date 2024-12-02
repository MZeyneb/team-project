import { BASE_URL } from "../constants.js";


const cardBody = document.querySelector('.cards')
let products = null;

async function getAllData(endpoints) {
    try {
        const response = await axios(`${BASE_URL}/${endpoints}`)
        products = response.data
        cardInner(products)
    } catch (error) {
        console.error(error);
    }

}

function cardInner(array){
    cardBody.innerHTML=''
    array.forEach(element => {
        cardBody.innerHTML += `
        <div class="vacancy-card">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <div class="salary">${element.salary}</div>
                <div class="employment-type">${element.employmentType}</div>
                <a href="#" class="apply-button" data-id=${element.id}>Apply Now</a>
            </div>
        `
    });
}


window.addEventListener('DOMContentLoaded',function(){
    getAllData("vacancies")
})