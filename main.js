const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

function matchPasswords() {
	const matchText = document.getElementById("match");
	if (confirmPasswordInput.value !== passwordInput.value) {
		matchText.style.opacity = "1";
		confirmPasswordInput.style.border = "1px solid red";
		passwordInput.style.border = "1px solid red";
	} else {
		matchText.style.opacity = "0";
		passwordInput.style.border = ".05rem solid rgba(0, 0, 0, 0.2)";
		confirmPasswordInput.style.border = ".05rem solid rgba(0, 0, 0, 0.2)";
	}
}

passwordInput.addEventListener("input", matchPasswords);
confirmPasswordInput.addEventListener("input", matchPasswords);
