import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

const handleEditAvatarClick = () => {
  setIsEditAvatarPopupOpen(true);
};

const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true);
};

const handleAddPlaceClick = () => {
  setIsAddPlacePopupOpen(true);
};

const handleCardClick = (card) => {
  setIsImagePreviewOpen(true);
  setSelectedCard({
    name: card.name,
    link: card.link,
  });
};
  
const closeAllPopups = () => {
  setIsAddPlacePopupOpen(false);
  setIsEditAvatarPopupOpen(false);
  setIsEditProfilePopupOpen(false);
  setIsImagePreviewOpen(false);
};

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        title="Edit profile"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
      >
        <div className="popup__field">
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Name"
            className="popup__input-text"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className="popup__error popup__input-error"
            id="input-name-error"
          />
        </div>
        <div className="popup__field">
          <input
            id="title-input"
            type="text"
            name="title"
            placeholder="About me"
            className="popup__input-text"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__error popup__input-error"
            id="input-about-error"
          ></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="New place"
        name="add_place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Create"
      >
        <div className="popup__field">
          <input
            id="place-title-input"
            type="text"
            name="name"
            placeholder="Title"
            className="popup__input-text popup__input"
            required
            minLength="1"
            maxLength="30"
          />
          <span
            className="popup__error popup__input-error"
            id="input-place-error"
          ></span>
        </div>
        <div className="popup__field">
          <input
            id="input-url"
            type="url"
            name="link"
            placeholder="Image link"
            className="popup__input-text popup__input"
            required
          />
          <span className="form__input-error place-url-input-error"></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Change Profile Picture"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Save"
      >
        <div className="form popup__form popup__form-avatar">
          <input
            id="avatar-url"
            type="url"
            name="link"
            placeholder="Profile Image link"
            className="popup__input-text popup__input"
            required
          />
          <span
            className="popup__error popup__input-error"
            id="avatar-url-error"
          ></span>
        </div>
      </PopupWithForm>

      <PopupWithForm
        title="Are you sure?"
        name="delete-card"
        buttonText="Yes"
      />

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePreviewOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
