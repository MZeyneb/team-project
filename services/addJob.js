import { BASE_URL } from "../constants.js";

async function getAllData() {
    const res = await axios(`${BASE_URL}/vacancies`);
    drawcards(res.data);
    arr = res.data;
}

const input = document.querySelector(".search");

let arr = null;

const add = document.querySelector(".add");
const a = document.querySelector(".inpname");
const b = document.querySelector(".inppar");
const c = document.querySelector(".inpprice");
const d = document.querySelector(".location");
const radd = document.querySelector(".radd");
const dn = document.querySelector(".k-input");
const dn2 = document.querySelector(".k2-input");
const slct = document.querySelector('#select')
const date = document.querySelector('.date')

const e = document.querySelector(".editName");
const f = document.querySelector(".editPar");
const g = document.querySelector(".editPrice");
const h = document.querySelector("#editSelect");
const j = document.querySelector(".editDate");
const form = document.querySelector('.form')

add.addEventListener("click", async function () {
    dn.classList.toggle("d-none");
    dn2.classList.add("d-none");
    if (!dn.classList.contains("d-none")) {
        clearInputFields();
    }
});

radd.addEventListener("click", async function () {
    dn.classList.add("d-none");
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; 
    if (e.value.trim() === "") { 
        await axios.post(`${BASE_URL}/vacancies`, {
            title: a.value.trim(),
            description: b.value.trim(),
            salary: c.value.trim(),
            employmentType: slct.value.trim(),
            postedAt: formattedDate,
            expiresAt: date.value.trim(),
        });
    } else {
       
        await axios.patch(`${BASE_URL}/vacancies/${e.dataset.id}`, {
            title: e.value.trim(),
            description: f.value.trim(),
            salary: g.value.trim(),
            employmentType: h.value.trim(),
            postedAt: formattedDate,
            expiresAt: j.value.trim(),
        });
    }
    getAllData(); 
});

function populateEditForm(id) {
    const item = arr.find(element => element.id === id);
    e.value = item.title;
    f.value = item.description;
    g.value = item.salary;
    h.value = item.employmentType;
    j.value = item.expiresAt
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
            <td>${element.title}</td>
            <td>${element.description}</td>
            <td>${element.salary}</td>
            <td>${element.employmentType}</td>
            <td>${element.expiresAt.slice(0, 10)}</td>
            <td></td>`;

        tr.querySelector("td:last-child").appendChild(delet);
        tr.querySelector("td:last-child").appendChild(editButton);

        tbody.appendChild(tr);

        async function deletedata(id) {
            const res = await axios.delete(`${BASE_URL}/vacancies/${id}`);
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

input.addEventListener("keyup", function () {
    const filtered = arr.filter((item) => {
        return item.title.toLowerCase().includes(input.value.toLowerCase().trim());
    });
    drawcards(filtered);
});

form.addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];  

    const itemId = e.target.querySelector(".editName").dataset.id;  

    if (itemId) {  
        await axios.patch(`${BASE_URL}/vacancies/${itemId}`, {
            title: e.target.querySelector(".editName").value.trim(),
            description: e.target.querySelector(".editPar").value.trim(),
            salary: e.target.querySelector(".editPrice").value.trim(),
            employmentType: e.target.querySelector("#editSelect").value.trim(),
            postedAt: formattedDate,
            expiresAt: e.target.querySelector(".editDate").value.trim(),
        });
    }
    getAllData(); 
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
    j.value = "";
    slct.value = "";
}

getAllData();