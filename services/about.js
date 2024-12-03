const mission = document.querySelector(".mission");
const join = document.querySelector(".join");
const wedo = document.querySelector(".wedo");
const chose = document.querySelector(".chose");
const missionh = document.querySelector(".missionh");
const joinh = document.querySelector(".joinh");
const wedoh = document.querySelector(".wedoh");
const choseh = document.querySelector(".chooseh");


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
