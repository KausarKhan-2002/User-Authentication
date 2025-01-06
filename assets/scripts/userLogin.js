export function userLogin(e) {
  e.preventDefault();

  const localData = JSON.parse(localStorage.getItem("userInformation"));

  if (!loginEmail.value) {
    alert("Please fill your email address");
    return;
  }

  if (!loginEmail.value.includes("@gmail.com")) {
    alert("Invalid email adress");
    return
  }

  if (loginPassword.value <= 7) {
    alert("Invalid password");
    return;
  }

  if (localData.email !== loginEmail.value) {
    alert("Email adress is wrong!");
    return;
  }

  if (localData.password !== loginPassword.value) {
    alert("Password is wrong!");
    return;
  }

  

  dashboard.innerText = "Welcome to the technical world";
  dashboard.style.marginTop = "140px";
  dashboard.style.fontSize = "2rem";
  dashboard.style.textAlign = "center";
  header.style.display = "flex";
  logInPage.style.display = "none"

  localStorage.setItem("isloggedInPage", "false")
}
