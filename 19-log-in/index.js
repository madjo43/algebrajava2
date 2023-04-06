const loginFormElement = document.querySelector("#login-form");
const passwordToggleElement = document.querySelector("#password-toggle");
const passwordElement = document.querySelector("#password");
const bannerElement = document.querySelector("#banner");

loginFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = event.target.querySelector("#username");
    const passwordInput = event.target.querySelector("#password");

    if (!validatePassword(passwordInput.value)){
        alert("the password must be al least 8characters long!")
    } else {
        bannerElement.innerHTML = `Welcome ${usernameInput.value}!`;
        loginFormElement.remove();
    }

    console.log(usernameInput.value, passwordInput.value);
});

function validatePassword(password) {
    
    return typeof password === `string` && password.length >= 8 ;
    
};
passwordToggleElement.addEventListener("click", function(event) {
    console.log(this);

   if ( passwordElement.type  === "password") {
      passwordElement.type = "text";
      this.innerHTML = "Hide";
   } else {
       passwordElement.type = "password";
       this.innerHTML = "Show";
   }
});
