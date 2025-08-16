document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector<HTMLInputElement>("#formValidator");

  const userName = document.querySelector<HTMLInputElement>("#userName");
  const userEmail = document.querySelector<HTMLInputElement>("#userEmail");
  const userPW = document.querySelector<HTMLInputElement>("#userPW");

  const userEmailErr = document.querySelector<HTMLInputElement>("#userEmailErr");
  const userPWErr = document.querySelector<HTMLInputElement>("#userPWErr");

  function validateUserName(name: string): boolean {
    return !!name;
  }

  function validateUserEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateUserPW(password: string): boolean {
    return password.length >= 6;
  }

  userEmail?.addEventListener("input", () => {
    const emailValid = validateUserEmail(userEmail!.value);
    if (!emailValid) {
      userEmailErr!.style.color = "red"
      userEmailErr!.style.display = "block"
    } else {
      userEmailErr!.style.display = "none";
    }
    userEmail!.style.outline = emailValid ? "2px solid green" : "2px solid red";
  });

  userPW?.addEventListener("input", () => {
    const passwordValid = validateUserPW(userPW!.value);
    if (!passwordValid) {
      userPWErr!.style.color = "red"
      userPWErr!.style.display = "block" 
    } else {
      userPWErr!.style.display = "none"
    }
    userPW!.style.outline = passwordValid ? "2px solid green" : "2px solid red";
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!userName?.value || !userEmail?.value || !userPW?.value) {
      alert("insufficient credintials");
      return;
    }

    const nameValid = validateUserName(userName?.value || "");
    const emailValid = validateUserEmail(userEmail?.value || "");
    const passwordValid = validateUserPW(userPW?.value || "");

    if (nameValid && emailValid && passwordValid) {
      const newUser = {
        userName: userName?.value,
        userEmail: userEmail?.value,
        userPW: userPW?.value,
      };

      localStorage.setItem("myUsers", JSON.stringify(newUser));
      alert("form submitted succesfullly");

      userEmail!.style.outline = "1px solid black";
      userPW!.style.outline = "1px solid black";

      userName!.value = "";
      userEmail!.value = "";
      userPW!.value = "";
    }
  });
});
// export {}
