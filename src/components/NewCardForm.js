import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";

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
        <p class="NewCard-header">New Card</p>
        <div>
          {/* <label htmlFor="message">Message:</label> */}
          <input
            placeholder="TYPE IN CARD"
            name="message"
            value={formFields.message}
            onChange={onMessageChange}
          />
        </div>
        <input type="submit" value=" +  add card" />
      </form>
    </>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
