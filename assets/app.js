import { userLogin } from "./scripts/userLogin.js";
import usersignupAuthentication from "./userSignupAuthentication.js";

import {
  signupUsernameTextValidationColor,
  signupEmailTextValidationColor,
  signupPasswordTextValidationColor,
  signupTelephoneTextValidationColor,
  signupDOBTextValidationColor,
} from "./scripts/userSignupTextColor.js";

// const elementsId = {};
// const eachId = document.querySelectorAll("[id]")
// eachId.forEach(id => elementsId[id.id] = id)
// console.log(elementsId);

header.style.display = "none";

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
    console.log("yes");
    
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

    let trackLogin = localStorage.getItem("isloggedInPage")

    loginSubmit.addEventListener("click", (e) => {
      trackLogin = userLogin(e)

    })
    
    sigInPage.style.display = "none"
    logInPage.style.display = "flex"

    // if (trackLogin == "false") {
    //   logInPage.style.display = "none"
    //   header.style.display = "flex"
    // }
    // else {
    //   logInPage.style.display = "block"
    // }

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
