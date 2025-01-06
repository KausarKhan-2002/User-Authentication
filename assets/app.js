import { userLogin } from "./scripts/userLogin.js";
import usersignupAuthentication from "./userSignupAuthentication.js";

import {
  signupUsernameTextValidationColor,
  signupEmailTextValidationColor,
  signupPasswordTextValidationColor,
  signupTelephoneTextValidationColor,
  signupDOBTextValidationColor,
} from "./scripts/userSignupTextColor.js";
import theme from "./scripts/theme.js";

// Just try access every Id's of HTML in elementsId
// const elementsId = {};
// const eachId = document.querySelectorAll("[id]")
// eachId.forEach(id => elementsId[id.id] = id)
// console.log(elementsId);

header.style.display = "none"


loginAcount.addEventListener("click", () => {
  sigInPage.style.display = "none";
  logInPage.style.display = "block";
});

signUpAcount.addEventListener("click", () => {
  sigInPage.style.display = "block";
  logInPage.style.display = "none";
});

function handleUserSignUp() {
  if (localStorage.getItem("isLoggedin") === "true") {
    
    signupUsernameTextValidationColor(signupName);
    signupEmailTextValidationColor(signupEmail);
    signupPasswordTextValidationColor(signupPassword);
    signupTelephoneTextValidationColor(signupTelephone);
    signupDOBTextValidationColor(signupDate);

    signupSubmit.addEventListener("click", (e) => {
      const login = usersignupAuthentication(e);
      if (login) alert("You are already logged in");
      sigInPage.style.display = "none";
      logInPage.style.display = "block";

      signupName.value = "";
      signupEmail.value = "";
      signupPassword.value = "";
      signupTelephone.value = "";
      signupDate.value = "";
    });

    loginSubmit.addEventListener("click", (e) => {
      userLogin(e)
    })
    
    sigInPage.style.display = "none"
    logInPage.style.display = "flex"
    header.style.display = "flex"

    return;
  }

  signupUsernameTextValidationColor(signupName);
  signupEmailTextValidationColor(signupEmail);
  signupPasswordTextValidationColor(signupPassword);
  signupTelephoneTextValidationColor(signupTelephone);
  signupDOBTextValidationColor(signupDate);

  // usersignupAuthentication()
  signupSubmit.addEventListener("click", (e) => usersignupAuthentication(e));
}

// localStorage.clear();
handleUserSignUp();

const themeBtns = document.querySelectorAll(".themeMode")
theme(themeBtns)
