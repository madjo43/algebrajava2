const appElement = document.querySelector(`#app`);

 function createMessage(text) {
    const element = document.createElement(`div`);
    element.innerHTML = `<h1>${text}</h1>`;
    element.classList.add(`red`);
    return element;
 }

 const messageElement = createMessage("Hello!");

 console.log(messageElement);

 appElement.appendChild(messageElement);
