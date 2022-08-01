import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} 
      ${props.isOpen ? "popup_active" : ""}`}
    >
      <div className="popup__content">
        <form className="form popup__form" onSubmit={props.onSubmit}>
          <button
            className="button popup__btn-close"
            type="button"
            onClick={props.onClose}
          >
            &#10006;
          </button>
          <h2 className="popup__header">{props.title}</h2>
          {props.children}
          <button
            className="button popup__btn"
            type="submit"
            onClick={props.onSubmit}
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
