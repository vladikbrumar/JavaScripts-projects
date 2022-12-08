let count = 0;

const btns = document.getElementsByClassName('btn');
const value = document.querySelector('#counter');


for(let btn of btns) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
            value.style.color = "#dc3545";
        } else if(styles.contains('increase')) {
            count++;
            value.style.color = "#28a745";
        } else if(styles.contains('reset')) {
            count = 0;
            value.style.color = "#343a40";
        }
        value.textContent = count;
    })
}
