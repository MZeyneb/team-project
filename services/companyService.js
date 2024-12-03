import { BASE_URL } from "../constants.js";

async function getAllData(){
    const res = await axios(`${BASE_URL}/companies`)
    drawcards(res.data)
    arr = res.data
}

const input = document.querySelector(".search")

let arr = null

const add = document.querySelector(".add")
const editinp = document.querySelector(".show")
// const clear = document.querySelector(".clear")
const a = document.querySelector(".inpname")
const b = document.querySelector(".inppar")
const c = document.querySelector(".inpprice")
const d = document.querySelector(".location")
const radd = document.querySelector(".radd")
const dn = document.querySelector(".k-input")
const dn2 = document.querySelector(".k2-input")

const e = document.querySelector(".editName")
const f = document.querySelector(".editPar")
const g = document.querySelector(".editPrice")
const h = document.querySelector(".editlocation")

add.addEventListener("click" ,async function addd(){
    dn.classList.remove("d-none")
})

radd.addEventListener("click" ,async function addd(){
    dn.classList.add("d-none")
    axios.post(`${BASE_URL}/companies`, {
        name:  a.value.trim(),
        industry: b.value.trim(),
        website: c.value.trim(),
        location: d.value.trim(),
        
      })
})

editinp.addEventListener("click" ,async function addd(){
    dn2.classList.remove("d-none")
})

// async function deletedata(){
//     const re2 = await axios(`${BASE_URL}/companies/`)
    
    
    
// }


// clear.addEventListener("click", ()=>{
//     deletedata()
// })



const tbody = document.querySelector("tbody")


function drawcards(arr){
    tbody.innerHTML= ""
    arr.forEach(element => {
        const delet = document.createElement("button")
        const tr = document.createElement("tr")
        const editButton = document.createElement("button");


        delet.classList.add("bg-danger")
        delet.classList.add("delete-button")
        delet.classList.add("p-1")
        delet.textContent= "delete"

        editButton.classList.add("bg-warning")
        editButton.classList.add("p-1")
        editButton.classList.add("edit-button")
        editButton.textContent= "edit"


        tr.innerHTML=`
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.industry}</td>
            <td>${element.website}</td>
            <td>${element.location}</td>
            <td></td>`

            tr.querySelector("td:last-child").appendChild(delet);
            tr.querySelector("td:last-child").appendChild(editButton);

            tbody.appendChild(tr);

        tbody.appendChild(tr)
        async function deletedata(id){
            const res = await axios.delete(`${BASE_URL}/companies/${id}`)
            
        }
        

        delet.addEventListener("click", ()=>{
            deletedata(element.id)
        })


        editButton.addEventListener("click", ()=>{
            dn2.classList.add("d-none")
            axios.patch(`${BASE_URL}/companies/${element.id}`, {
                name:  e.value.trim(),
                industry: f.value.trim(),
                website: g.value.trim(),
                location: h.value.trim(),
              })
        })

    });
}

input.addEventListener("keyup", function () {
    const filtered = arr.filter((item) => {
        return item.name.toLowerCase().includes(input.value.toLowerCase().trim());
    });
    drawcards(filtered);
  });

getAllData()