
import { BASE_URL } from "../constants.js";


const cardBody = document.querySelector('.cards')
let products = null;
const searchInp = document.querySelector('#search-input')
const searchByJobType = document.querySelector('#select')
const sortBtn = document.querySelector('.sort')

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

function searchByTitle(event) {
    const valueByName = event.target.value.toLowerCase().trim();
    const filteredProducts = products.filter(item => 
        item.title.toLowerCase().includes(valueByName) || 
        item.description.toLowerCase().includes(valueByName)
    );
    cardInner(filteredProducts); 
}

function selectByJobType(event){
    const selectValue = event.target.value.toLowerCase().trim()
    let filteredSelect = null
    if (selectValue === 'all') {
        filteredSelect = [...products]
    }else{
        filteredSelect = products.filter(item => item.employmentType.toLowerCase().includes(selectValue) )
    }
    cardInner(filteredSelect)
}

sortBtn.addEventListener('click', function() {
    
    if (this.textContent.toUpperCase() === 'DEFAULT') {
        this.textContent = 'ASC';  
    } else if(this.textContent.toUpperCase() === 'ASC'){
        this.textContent = 'DESC'
    }else if(this.textContent.toUpperCase() === 'DESC') {
        this.textContent = 'DEFAULT'
    }

    sortBySalary(this.textContent.toLowerCase());
});

function sortBySalary(sortOrder) {
    if (!products) return;  

    let sortedProducts;
    if (sortOrder === 'asc') {
        sortedProducts = [...products].sort((a, b) => a.salary.slice(0,4) - b.salary.slice(0,4));  
    } else if (sortOrder === 'desc') {
        sortedProducts = [...products].sort((a, b) => b.salary.slice(0,4) - a.salary.slice(0,4));  
    } else if(sortOrder === 'default'){
        sortedProducts = [...products];  
    }

    cardInner(sortedProducts);  
}

searchInp.addEventListener('input', searchByTitle);
searchByJobType.addEventListener('input', selectByJobType)

window.addEventListener('DOMContentLoaded',function(){
    getAllData("vacancies")
})