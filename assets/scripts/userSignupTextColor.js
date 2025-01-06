// It will apply green color when user name character is greater then 0
export function signupUsernameTextValidationColor(element) {
  element.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      e.target.nextElementSibling.style.color = "green";
    } else {
      e.target.nextElementSibling.style.color = "#555";
    }
  });
}

export function signupEmailTextValidationColor(element) {
  element.addEventListener("input", (e) => {
    if (e.target.value.includes("@gmail.com") && e.target.value.length > 10) {
      let emailChecker = "";
      for (let i = e.target.value.length - 1; i >= 0; i--) {
        emailChecker += e.target.value[i];
        if (e.target.value[i] === "@") {
          break;
        }
      }
      emailChecker = emailChecker.split("").reverse().join("");
      if (emailChecker === "@gmail.com") {
        e.target.nextElementSibling.style.color = "green";
      } else {
        e.target.nextElementSibling.style.color = "#555";
      }
    } else {
      e.target.nextElementSibling.style.color = "#555";
    }
  });
}

// It will apply green color when length of password is greater then 7
export function signupPasswordTextValidationColor(element) {
  element.addEventListener("input", (e) => {
    if (e.target.value.length > 7) {
      e.target.nextElementSibling.style.color = "green";
    } else {
      e.target.nextElementSibling.style.color = "#555";
    }
  });
}

// It will apply green color when mobile number is exactly 10 digits
export function signupTelephoneTextValidationColor(element) {
  element.addEventListener("input", (e) => {
    if (e.target.value.length == 10) {
      e.target.nextElementSibling.style.color = "green";
    } else {
      e.target.nextElementSibling.style.color = "#555";
    }
  });
}

// It will apply green color when user provides DOB
export function signupDOBTextValidationColor(element) {
  element.addEventListener("input", () => {
    if (element.value) {
      element.nextElementSibling.style.color = "green";
    } else {
      element.nextElementSibling.style.color = "#555";
    }
  });
}
