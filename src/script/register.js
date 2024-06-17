const defaultUserName = "User";

export function onRegisterSubmitButtonClick(event) {
  event.preventDefault();

  const usernameInput = document.getElementById("register-username-input");
  const emailInput = document.getElementById("register-email-input");
  const passwordInput = document.getElementById("register-password-input");
  const tAndC = document.getElementById("register-checkbox-input");

  const registerPayload = {
    userName: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    tAndC: tAndC.checked,
  };

  if (!registerPayload.tAndC) {
    displayMissingTAndC(registerPayload.userName);
  } else {
    displaySussessfulRegistration(registerPayload);
  }
}

function displayMissingTAndC(userName) {
  alert(
    `Dear ${userName}, in order to register, you need to accept terms and conditions`
  );
}

function displaySussessfulRegistration(registerPayload) {
  alert(
    `Dear ${registerPayload.userName}, you have been sussessfully registered`
  );
}
