function theme(themeBtns) {
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => themeChanger(btn));
  });

  themeChangerLocally(themeBtns)
}

function themeChangerLocally(themeBtns) {

    if (localStorage.getItem("isDark") === null) {
        localStorage.setItem("isDark", "false")
    }
    
    if (localStorage.getItem("isDark") == "true") {
        themeChanger(themeBtns[1])
    }
    else {
        themeChanger(themeBtns[0])
    }
}

// localStorage.setItem("isDark", false)


const inputFields = document.querySelectorAll(".inputField");

function themeChanger(themeBtn) {
  if (themeBtn.id == "darkMode") {
    localStorage.setItem("isDark", "true")
    document.body.style.background = "#0F172A";
    header.style.background = "#192A3E";
    logo.style.color = "#eee";
    subLogo.style.color = "#EF4444";
    themeContainer.style.background = "#334155";
    themeContainer.style.color = "#eee";
    darkMode.style.background = "#534155";
    lightMode.style.background = "transparent";
    // signupHead.style.background = "#475569";
    // signupHead.style.color = "#eee";

    sigInPage.style.background = "#334155";
    inputFields.forEach((input) => {
      input.style.background = "#0F172A";
      input.style.color = "#eee";
      input.style.border = "1.5px solid rgb(7, 25, 50)";
    });

    logInPage.style.background = "#334155";
    loginHeading.style.color = "#CBD5E1";
    emailLavel.style.color = "#94A3B8";
    passwordLavel.style.color = "#94A3B8";

    if (dashboard?.firstElementChild) {
      dashboard.firstElementChild.style.color = "#ccc";
    }
    if (dashboard?.lastElementChild) {
      dashboard.lastElementChild.style.color = "#999";
    }

  } else {
    localStorage.setItem("isDark", "false")
    document.body.style.background = "#eee";
    header.style.background = "#eee";
    logo.style.color = "#111";
    subLogo.style.color = "#DC2626";
    themeContainer.style.background = "#E2E8F0";
    themeContainer.style.color = "#111";
    darkMode.style.background = "transparent";
    lightMode.style.background = "#F1F5F9";
    // signupHead.style.background = "#1E293B";
    // signupHead.style.color = "#eee";
    loginHeading.style.color = "#1E293B";

    sigInPage.style.background = "white";
    inputFields.forEach((input) => {
      input.style.background = "white";
      input.style.color = "#111";
      input.style.border = "1.5px solid #ddd";
    });
    logInPage.style.background = "white";
    loginHeading.style.color = "#1E293B";
    emailLavel.style.color = "#475569";
    passwordLavel.style.color = "#475569";

    if (dashboard?.firstElementChild) {
      dashboard.firstElementChild.style.color = "#111";
    }
    if (dashboard?.lastElementChild) {
      dashboard.lastElementChild.style.color = "#777";
    }
  }
}

export default theme;
