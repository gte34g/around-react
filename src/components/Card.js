import React from "react";

function Card(props) {

    function handleClick() {
      props.onCardClick(props.card);
    }
    function handleRemoveModal() {
      props.onDeleteClick(props.card);
    }
    return (
      <div className="place__item">
        <img
          className="place__image"
          src={props.link}
          alt={props.name}
          onClick={handleClick}
        />
        <button
          className="place__btn-trash"
          onClick={handleRemoveModal}
        ></button>
        <div className="place__info">
          <h2 className="place__text">{props.name}</h2>
          <div className="likes-wrapper">
            <button className="place__btn-hart" type="button"></button>
            <p className="place__hart-counts">{props.likeCounter}</p>
          </div>
        </div>
      </div>
    );
}

export default Card