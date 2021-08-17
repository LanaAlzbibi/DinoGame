const dino = document.getElementById("dino");
const heart= document.getElementById("cactus");
function jump(){
    if(dino.classList!="jump"){
    dino.classList.add("jump");
    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300);
}
}

let isAlive = setInterval(() => {
    /*checking pos and check if they interfere*/
    //postion Y of dino
    let dinoIsTop = parseInt( window.getComputedStyle(dino).getPropertyValue("top"));
    console.log(dinoIsTop);

    //position X of heart
    let hearteIsLeft = parseInt( window.getComputedStyle(heart).getPropertyValue("left"));
    console.log(hearteIsLeft);

    //detecting collision 
    if (hearteIsLeft<50 && hearteIsLeft>0 && dinoIsTop >=140){
        alert("COLLISION DETECTED ! GAME IS OVER")
    }

    
}, 10);



document.addEventListener("keydown", function (event){
    jump();

});