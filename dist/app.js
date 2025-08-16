"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#formValidator");
    const userName = document.querySelector("#userName");
    const userEmail = document.querySelector("#userEmail");
    const userPW = document.querySelector("#userPW");
    const userEmailErr = document.querySelector("#userEmailErr");
    const userPWErr = document.querySelector("#userPWErr");
    function validateUserName(name) {
        return !!name;
    }
    function validateUserEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function validateUserPW(password) {
        return password.length >= 6;
    }
    userEmail === null || userEmail === void 0 ? void 0 : userEmail.addEventListener("input", () => {
        const emailValid = validateUserEmail(userEmail.value);
        if (!emailValid) {
            userEmailErr.style.color = "red";
            userEmailErr.style.display = "block";
        }
        else {
            userEmailErr.style.display = "none";
        }
        userEmail.style.outline = emailValid ? "2px solid green" : "2px solid red";
    });
    userPW === null || userPW === void 0 ? void 0 : userPW.addEventListener("input", () => {
        const passwordValid = validateUserPW(userPW.value);
        if (!passwordValid) {
            userPWErr.style.color = "red";
            userPWErr.style.display = "block";
        }
        else {
            userPWErr.style.display = "none";
        }
        userPW.style.outline = passwordValid ? "2px solid green" : "2px solid red";
    });
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!(userName === null || userName === void 0 ? void 0 : userName.value) || !(userEmail === null || userEmail === void 0 ? void 0 : userEmail.value) || !(userPW === null || userPW === void 0 ? void 0 : userPW.value)) {
            alert("insufficient credintials");
            return;
        }
        const nameValid = validateUserName((userName === null || userName === void 0 ? void 0 : userName.value) || "");
        const emailValid = validateUserEmail((userEmail === null || userEmail === void 0 ? void 0 : userEmail.value) || "");
        const passwordValid = validateUserPW((userPW === null || userPW === void 0 ? void 0 : userPW.value) || "");
        if (nameValid && emailValid && passwordValid) {
            const newUser = {
                userName: userName === null || userName === void 0 ? void 0 : userName.value,
                userEmail: userEmail === null || userEmail === void 0 ? void 0 : userEmail.value,
                userPW: userPW === null || userPW === void 0 ? void 0 : userPW.value,
            };
            localStorage.setItem("myUsers", JSON.stringify(newUser));
            alert("form submitted succesfullly");
            userEmail.style.outline = "1px solid black";
            userPW.style.outline = "1px solid black";
            userName.value = "";
            userEmail.value = "";
            userPW.value = "";
        }
    });
});
// export {}
