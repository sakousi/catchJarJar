let gameTime;
let depopSpeed = 3000;
let popSpeed = 1000;
let random;
let strRan;
let casing = 64;

for (let i = 0; i < casing; i++) {
    document.getElementById('grid').innerHTML += '<div class="game__grid" id="' + i + '"></div>';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

setInterval(() => {
    random = getRandomInt(casing);
    popIn(random)

}, popSpeed);


function punched(id) {
    console.log("L'element avec l'idetifient "+id.replace("jarjar", "")+" a été assomée")
    document.getElementById(id).outerHTML = ''
}

function popIn(random){
    document.getElementById(random).innerHTML = '<img src="src/images/JarJar.png" id="jarjar' + random + '" onclick="punched(\'jarjar' + random + '\')" class="game__grid_img" alt="Click">';
    setTimeout(() =>{
        document.getElementById(random).innerHTML = ''
    }, depopSpeed)
}