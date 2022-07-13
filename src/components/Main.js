import React from "react";
import "../blocks/main/main.css";
import editBtn from "../images/Edit-Button.svg";
import plusButton from "../images/plusButton.svg";
import { api } from "../utils/api";
import Card from "./Card";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onDeleteClick,
}) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile-wrapper">
          <button
            type="button"
            className="button profile__btn-avatar"
            onClick={onEditAvatarClick}
          >
            <img
              src={userAvatar}
              alt="User avatar"
              className="profile__image"
            />
          </button>
          <div className="profile__info">
            <div className="profile__content">
              <h1 className="profile__name" id="heroName">
                {userName}
              </h1>
              <button
                type="button"
                className="button profile__btn-edit"
                id="editButton"
                onClick={onEditProfileClick}
              >
                <img className="profile__icon" src={editBtn} alt="Edit" />
              </button>
            </div>
            <p className="profile__title" id="heroTitle">
              {userDescription}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="button profile__btn-add"
          onClick={onAddPlaceClick}
        >
          <img src={plusButton} alt="A white plus sign" />
        </button>
      </section>
      <section className="photo-grid">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              caption={card.name}
              likeCounter={card.likes.length}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main