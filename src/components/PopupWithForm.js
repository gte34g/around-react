import React from "react";
import "../blocks/popup/popup.css";
import "../blocks/popup/_active/popup_active.css";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} 
      ${props.isOpen ? "popup_active" : ""}`}
    >
      <div className="popup__content">
        <form className="form popup__form">
          <button
            className="button popup__btn-close"
            type="button"
            onClick={props.onClose}
          >
            &#10006;
          </button>
          <h2 className="popup__header">{props.title}</h2>
          {props.children}
          <button className="button popup__btn" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
