export function onLoginSubmitButtonClick(event) {
  event.preventDefault();

  const emailInput = document.getElementById("login-email-input");
  const passwordInput = document.getElementById("login-password-input");
  const rememberMeInput = document.getElementById("login-checkbox-input");

  const loginPayload = {
    email: emailInput.value,
    password: passwordInput.value,
    needToRememberUser: rememberMeInput.checked,
  };

  displaySussessfulLogin(loginPayload);
}

function displaySussessfulLogin(loginPayload) {
  const rememberText = loginPayload.needToRememberUser
    ? "as requested, we will remember your details during next login"
    : "up on your next login, you will enter your details again";

  alert(`User with email: ${loginPayload.email}, ${rememberText}`);
}
