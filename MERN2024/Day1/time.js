const time = new Date();
const hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const day = time.getDay();
const month = time.getMonth();


const waktu = {
    time,
    hours,
    minutes,
    seconds,
    day,
    month,
}

module.exports = waktu;