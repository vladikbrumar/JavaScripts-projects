const colors = ['#74D3AE', '#678D58', '#A6C48A', '#F6E7CB', '#DD9787',
                '#CDF7F6', '#8FB8DE', '#9A94BC', '#9B5094', '#6A605C'];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById('btn');
let mainBlock = document.querySelector('main');
let colorText = document.querySelector('.color');

btn.addEventListener('click', () => {
    let pickedColor = colors[getRandomNumber(colors.length)];
    pickedColor = generateHexColor();
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


