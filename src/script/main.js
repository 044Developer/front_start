import { onLoginSubmitButtonClick } from "./login.js";
import { onRegisterSubmitButtonClick } from "./register.js";

const container = document.querySelector(".login-container");
const loginLinkButton = document.querySelector(".login-link");
const registerLinkButton = document.querySelector(".register-link");
const navBarLoginButton = document.querySelector(".nav-login-button");
const closePopupButton = document.querySelector(".icon-close");
const homeButton = document.querySelector(".nav-home");
const aboutButton = document.querySelector(".nav-about");
const servicesButton = document.querySelector(".nav-services");
const contactButton = document.querySelector(".nav-contact");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("registration-form");

const submitEventKey = "submit";
const clickEventName = "click";
const popupTriggerKey = "active-popup";
const registrationTriggerKey = "registration-active";

function SubscribeEvents() {
  registerLinkButton.addEventListener(clickEventName, onRegisterButtonClicked);
  loginLinkButton.addEventListener(clickEventName, onLoginButtonClicked);
  navBarLoginButton.addEventListener(
    clickEventName,
    onNavBarLoginButtonClicked
  );
  closePopupButton.addEventListener(clickEventName, onPopupCloseButtonClick);
  homeButton.addEventListener(clickEventName, onHomeButtonClick);
  aboutButton.addEventListener(clickEventName, onAboutButtonClick);
  servicesButton.addEventListener(clickEventName, onServicesButtonClick);
  contactButton.addEventListener(clickEventName, onContactButtonClick);
  registerForm.addEventListener(submitEventKey, onRegisterSubmitButtonClick);
  loginForm.addEventListener(submitEventKey, onLoginSubmitButtonClick);
}

SubscribeEvents();

function onRegisterButtonClicked() {
  container.classList.add(registrationTriggerKey);
}

function onLoginButtonClicked() {
  container.classList.remove(registrationTriggerKey);
}

function onNavBarLoginButtonClicked() {
  container.classList.add(popupTriggerKey);
}

function onPopupCloseButtonClick() {
  container.classList.remove(popupTriggerKey);
}

function notImplementedFeatureAllert() {
  alert("Feature is not implemented, yet");
}

function onHomeButtonClick() {
  notImplementedFeatureAllert();
}

function onAboutButtonClick() {
  notImplementedFeatureAllert();
}

function onServicesButtonClick() {
  notImplementedFeatureAllert();
}

function onContactButtonClick() {
  notImplementedFeatureAllert();
}
