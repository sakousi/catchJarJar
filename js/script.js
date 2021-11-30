let gameTime;
let depopSpeed = 0;
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

function easy() {
    popSpeed = 1000
    depopSpeed = 1000
    console.log(popSpeed)
}

function meduim() {

}

function hard() {

}

setInterval(() => {
    random = getRandomInt(casing);

    document.getElementById(random).innerHTML = '<img src="src/images/JarJar.png" id="jarjar' + random + '" onclick="punched(\'jarjar' + random + '\')" class="game__grid_img" alt="Click">';
}, popSpeed);


function punched(id) {
    console.log(id)
    document.getElementById(id).outerHTML = ''
}