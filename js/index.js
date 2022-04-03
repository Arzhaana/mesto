const formOpenButtonElement = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector(".popup");
const formCloseButtonElement = popupElement.querySelector(".form__close-button");
const formNameElement = popupElement.querySelector(".form__field_input_name");
const formBioElement = popupElement.querySelector(".form__field_input_bio");
const userName = document.querySelector(".profile__title");
const userBio = document.querySelector(".profile__subtitle");

const openPopup = function() {
  popupElement.classList.add("popup_opened");
  formNameElement.value = userName.textContent;
  formBioElement.value = userBio.textContent;
}

const closePopup = function() {
  popupElement.classList.remove("popup_opened");
}

const closePopupByClickOnOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closePopup()
}

const editProfileInfo = function (event) {
  event.preventDefault();

  userName.textContent = formNameElement.value;
  userBio.textContent = formBioElement.value;

  closePopup();
}

formOpenButtonElement.addEventListener("click", openPopup);
formCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
popupElement.addEventListener("submit", editProfileInfo);