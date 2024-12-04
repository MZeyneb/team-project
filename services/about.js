const mission = document.querySelector(".mission");
const join = document.querySelector(".join");
const wedo = document.querySelector(".wedo");
const chose = document.querySelector(".chose");
const missionh = document.querySelector(".missionh");
const joinh = document.querySelector(".joinh");
const wedoh = document.querySelector(".wedoh");
const choseh = document.querySelector(".chooseh");
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




missionh.addEventListener("click", function(){
    if(mission.style.height== "80px"){
        mission.style.height= "0px";
    }
    else if(mission.style.height= "0px"){
        mission.style.height= "80px";
    }
    
})
joinh.addEventListener("click", function(){
    if(join.style.height== "80px"){
        join.style.height= "0px";
    }
    else if(join.style.height= "0px"){
        join.style.height= "80px";
    }
    
})

choseh.addEventListener("click", function(){
    if(chose.style.height== "80px"){
        chose.style.height= "0px";
    }
    else if(chose.style.height= "0px"){
        chose.style.height= "80px";
    }
    
})
wedoh.addEventListener("click", function(){
    if(wedo.style.height== "80px"){
        wedo.style.height= "0px";
    }
    else if(wedo.style.height= "0px"){
        wedo.style.height= "80px";
    }
    
})
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

