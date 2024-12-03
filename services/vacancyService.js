import { BASE_URL } from "../constants.js";


const cardBody = document.querySelector('.cards')
let products = null;
const searchInp = document.querySelector('#search-input')
const vacancy = document.querySelector('.vacancy-card')

async function getAllData(endpoints) {
    try {
        const response = await axios(`${BASE_URL}/${endpoints}`)
        products = response.data
        cardInner(products)
        searchByTitle(products)
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

function searchByTitle(event) {
    const valueByName = event.target.value.toLowerCase().trim();
    const filteredProducts = products.filter(item => 
        item.title.toLowerCase().includes(valueByName) || 
        item.description.toLowerCase().includes(valueByName)
    );
    cardInner(filteredProducts); 
}

searchInp.addEventListener('input', searchByTitle);

window.addEventListener('DOMContentLoaded',function(){
    getAllData("vacancies")
})