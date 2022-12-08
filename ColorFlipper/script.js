const colors = ['#74D3AE', '#678D58', '#A6C48A', '#F6E7CB', '#DD9787',
                '#CDF7F6', '#8FB8DE', '#9A94BC', '#9B5094', '#6A605C'];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let pickerMode = 'simple';
let pickedColor = '';

let btn = document.getElementById('btn');
let mainBlock = document.querySelector('main');
let colorText = document.querySelector('.color');
let links = document.getElementsByClassName('link');

window.onload = function(e) {
    clickOnLink();
}

btn.addEventListener('click', () => {
    if(pickerMode === 'hex'){
        pickedColor = generateHexColor();
    } else {
        pickedColor = colors[getRandomNumber(colors.length)];
    }
    console.log(pickerMode);
    mainBlock.style.background = pickedColor;
    colorText.textContent = pickedColor;
})

function getRandomNumber(listSize) {
    return Math.floor(Math.random()*listSize);
}

function generateHexColor() {
    let counter = 6;
    let color = '#';
    while(counter > 0){
        color += hex[getRandomNumber(hex.length)];
        counter--;
    }
    return color;
}

function clickOnLink(){
    for(let link of links){
        link.addEventListener('click', ()=>{
            for(let link of links){
                link.classList.remove('active');
            }
            link.classList.add('active');
            pickerMode = link.textContent;
        })
    }
}


