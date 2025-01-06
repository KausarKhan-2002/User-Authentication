export function userLogin(e) {
  e.preventDefault();

  const localData = JSON.parse(localStorage.getItem("userInformation"));

  if (!loginEmail.value) {
    alert("Please fill your email address");
    return;
  }

  if (!loginEmail.value.includes("@gmail.com")) {
    alert("Invalid email adress");
    return;
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

  dashboard.classList.add(
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "gap-3"
  );

  // const dashboardH2 = document.createElement("h2");
  // const dashboardP = document.createElement("p");
  dashboardH2.innerText = "Welcome to the technical world";
  dashboardP.innerText =
    "A simple web application designed to showcase basic client-side user authentication. The app includes features like user registration, login, and session handling using local storage. This demo focuses exclusively on client-side functionality";

  dashboardH2.classList.add("text-2xl", "font-bold", "text-slate-800");
  dashboardP.classList.add("w-[60%]");
  dashboard.append(dashboardH2);
  dashboard.append(dashboardP);
  header.style.display = "flex";
  logInPage.style.display = "none";

  localStorage.setItem("isloggedInPage", "false");
}
