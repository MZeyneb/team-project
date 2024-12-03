import { BASE_URL } from "../constants.js";

async function getAllData() {
    const res = await axios(`${BASE_URL}/companies`);
    drawcards(res.data);
    arr = res.data;
}

const form = document.querySelector("form")

const input = document.querySelector(".search");

let arr = null;

const add = document.querySelector(".add");
const editinp = document.querySelector(".show");
const a = document.querySelector(".inpname");
const b = document.querySelector(".inppar");
const c = document.querySelector(".inpprice");
const d = document.querySelector(".location");
const radd = document.querySelector(".radd");
const dn = document.querySelector(".k-input");
const dn2 = document.querySelector(".k2-input");

const e = document.querySelector(".editName");
const f = document.querySelector(".editPar");
const g = document.querySelector(".editPrice");
const h = document.querySelector(".editlocation");

let editingId = null; 

add.addEventListener("click", async function () {
    dn.classList.toggle("d-none"); 
    dn2.classList.add("d-none"); 
    if (!dn.classList.contains("d-none")) {
        clearInputFields();
        editingId = null; 
    }
});

radd.addEventListener("click", async function () {
    dn.classList.add("d-none"); 
    if (editingId === null) {
        await axios.post(`${BASE_URL}/companies`, {
            name: a.value.trim(),
            industry: b.value.trim(),
            website: c.value.trim(),
            location: d.value.trim(),
        });
    } else {
        await axios.patch(`${BASE_URL}/companies/${editingId}`, {
            name: e.value.trim(),
            industry: f.value.trim(),
            website: g.value.trim(),
            location: h.value.trim(),
        });
    }
    getAllData(); 
});


function populateEditForm(id) {
    const item = arr.find(element => element.id === id);
    e.value = item.name;
    f.value = item.industry;
    g.value = item.website;
    h.value = item.location;
    e.dataset.id = id; 
}   




const tbody = document.querySelector("tbody");

function drawcards(arr) {
    tbody.innerHTML = "";
    arr.forEach((element) => {
        const delet = document.createElement("button");
        const tr = document.createElement("tr");
        const editButton = document.createElement("button");

        delet.classList.add("bg-danger");
        delet.classList.add("delete-button");
        delet.classList.add("p-1");
        delet.textContent = "delete";

        editButton.classList.add("bg-warning");
        editButton.classList.add("p-1");
        editButton.classList.add("edit-button");
        editButton.textContent = "edit";

        tr.innerHTML = `
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.industry}</td>
            <td>${element.website}</td>
            <td>${element.location}</td>
            <td></td>`;

        tr.querySelector("td:last-child").appendChild(delet);
        tr.querySelector("td:last-child").appendChild(editButton);

        tbody.appendChild(tr);

        async function deletedata(id) {
            const res = await axios.delete(`${BASE_URL}/companies/${id}`);
            getAllData(); 
        }

        delet.addEventListener("click", () => {
            deletedata(element.id);
        });

        editButton.addEventListener("click", async () => {
            populateEditForm(element.id);
            dn2.classList.remove("d-none");
            dn.classList.add("d-none");
        });
    });
}


form.addEventListener('submit', async function (e) {
    e.preventDefault(); 
  
    const itemId = e.target.querySelector(".editName").dataset.id;  

    if (itemId) {  
        await axios.patch(`${BASE_URL}/companies/${itemId}`, {
            title: e.target.querySelector(".editName").value.trim(),
        industry: e.target.querySelector(".editPar").value.trim(),
            website: e.target.querySelector(".editPrice").value.trim(),
            location: e.target.querySelector(".editlocation").value.trim(),
        });
    }
    getAllData(); 
});


input.addEventListener("keyup", function () {
    const filtered = arr.filter((item) => {
        return item.name.toLowerCase().includes(input.value.toLowerCase().trim());
    });
    drawcards(filtered);
});

function clearInputFields() {
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
    e.value = "";
    f.value = "";
    g.value = "";
    h.value = "";
}

getAllData();
