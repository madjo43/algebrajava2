const timeDisplayElement = document.querySelector(`#time-display`);
const timeButtonElement = document.querySelector(`#time-button`);


let startTime = Date.now();
let endTime = startTime;

timeDisplayElement.innerHTML = `${endTime - startTime}ms`;

timeButtonElement.addEventListener(`click`, function () {
    endTime = Date.now();

    timeDisplayElement.innerHTML = `${endTime - startTime}ms`;

});

const timeDisplayElement2 = document.querySelector(`#time-display2`);
const timeButtonElement2 = document.querySelector(`#time-button2`);

let startTime2 = Date.now();
let endTime2 = startTime;

timeDisplayElement2.innerHTML = `${endTime2 - startTime2}ms`;

timeButtonElement2.addEventListener(`click`, function () {
    endTime2 = Date.now();

    timeDisplayElement2.innerHTML = `${endTime2 - startTime2}ms`;

    startTime2 = endTime2;
});