function usersignupAuthentication(e) {
  e.preventDefault();

  const userInformation = {};

  if (signupName.value.length > 0)
    userInformation["username"] = signupName.value;
  else {
    alert("Please fill username!");
    return;
  }

  if (signupEmail.value.length > 0) {
    if (
      signupEmail.value.includes("@gmail.com") &&
      signupEmail.value.length > 10
    ) {
      let emailChecker = "";

      for (let i = signupEmail.value.length - 1; i >= 0; i--) {
        emailChecker += signupEmail.value[i];

        if (signupEmail.value[i] === "@") {
          break;
        }
      }

      emailChecker = emailChecker.split("").reverse().join("");
      console.log(emailChecker);

      if (emailChecker === "@gmail.com")
        userInformation["email"] = signupEmail.value;
      else {
        alert("Invalid email adress!");
        return;
      }
    } else {
      alert("Invalid email adress!");
      return;
    }
  } else {
    alert("Please fill Email address!");
    return;
  }

  if (signupPassword.value.length > 7)
    userInformation["password"] = signupPassword.value;
  else {
    if (signupPassword.value.length == 0) alert("Please fill password!");
    else alert("Invalid password");
    return;
  }

  if (signupTelephone.value.length === 10 && Number(signupTelephone.value))
    userInformation["mobileNo"] = signupTelephone.value;
  else {
    if (signupTelephone.value.length == 0) alert("Please fill Mobile number");
    else alert("Invalid Mobile number");
    return;
  }

  if (signupDate.value) userInformation["dob"] = signupDate.value;
  else {
    alert("Please fill your Date of birth");
    return;
  }

  if (localStorage.getItem("isLoggedin") == "true") {
    return true
  }

  localStorage.setItem("userInformation", JSON.stringify(userInformation));
  localStorage.setItem("isLoggedin", true);
  sigInPage.style.display = "none";
  logInPage.style.display = "block"
  header.style.display = "flex"

  signupName.value = ""
  signupEmail.value = ""
  signupPassword.value = ""
  signupTelephone.value = ""
  signupDate.value = ""

}

export default usersignupAuthentication;
