import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";
// import './NewBoardForm.css';

const NewCardForm = ({ addCardCallback }) => {
  const [formFields, setFormFields] = useState({
    message: "",
  });

  const onMessageChange = (event) => {
    setFormFields({
      ...formFields,
      message: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addCardCallback({
      message: formFields.message,
    });

    setFormFields({
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
          <h2>Add New Card:</h2>
          <input
            className="card-form-input"
            placeholder="TYPE MESSAGE HERE"
            name="message"
            value={formFields.message}
            onChange={onMessageChange}
          />
        <input id="add-card-button" type="submit" value=" +  add card" />
      </form>
    </>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
