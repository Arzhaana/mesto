const formOpenButtonElement = document.querySelector(".profile__edit-button");
const popupElement = document.querySelector(".popup");
const formCloseButtonElement = popupElement.querySelector(".form__close-button");
const formTitleElement = popupElement.querySelector(".form__field_input_title");
const formSubtitleElement = popupElement.querySelector(".form__field_input_subtitle");
const userTitle = document.querySelector(".profile__title");
const userSubtitle = document.querySelector(".profile__subtitle");

const openPopup = function() {
  popupElement.classList.add("popup_opened");
  formTitleElement.value = userTitle.textContent;
  formSubtitleElement.value = userSubtitle.textContent;
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

  userTitle.textContent = formTitleElement.value;
  userSubtitle.textContent = formSubtitleElement.value;

  closePopup();
}

formOpenButtonElement.addEventListener("click", openPopup);
formCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
popupElement.addEventListener("submit", editProfileInfo);