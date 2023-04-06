const element = document.querySelector(`.wrapper`);
const element2 = document.querySelector(`.footer`);
const element3 = document.querySelector(`.time`);
const date = new Date();
const date2 = new Date();

console.log(element);
console.log(window.innerWidth, window.innerHeight);
console.log(date);
console.log(date2.getUTCFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

element.innerHTML = `${window.innerWidth}, ${window.innerHeight}`;
element.innerHTML = `${date}`;
element2.innerHTML = `${date2.getUTCFullYear()}, &copy `;
element3.innerHTML = `${date.getHours()}h, ${date.getMinutes()}m, ${date.getSeconds()}s`;