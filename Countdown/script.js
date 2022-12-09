const items = document.querySelectorAll('.date-container h3');

let futureDate = new Date(2022, 11, 25);

let futureTime = futureDate.getTime();

function getRemainingTime() {
    let today = new Date();

    const diff = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(diff / oneDay);
    let hours =  Math.floor((diff % oneDay) / oneHour);
    let minutes = Math.floor((diff % oneHour) / oneMinute);
    let seconds = Math.floor((diff % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });

    if(diff <= 0) {
        //clearInterval(countdown);
        let year = futureDate.getFullYear();
        futureDate.setFullYear(year + 1);
        futureTime = futureDate.getTime();
    }
}

//countdown 
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();