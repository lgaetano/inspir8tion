import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({addBoardCallback, isBoardFormVisible, updateBoardFormVisibility}) => {
  const buttonVisible = isBoardFormVisible ? 'visible' : 'hidden';
  const buttonName = isBoardFormVisible ? 'Hide' : 'Show';

  const [formFields, setFormFields] = useState ({
    title: '',
    owner: ''
  });
  
  const onTitleChange = (event) => {
    setFormFields({
        ...formFields,
        title: event.target.value
    })
  };
  
  const onOwnerChange = (event) => {
    setFormFields({
        ...formFields,
        owner: event.target.value
    })
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  
          addBoardCallback({
              title: formFields.title,
              owner: formFields.owner
          });
  
          setFormFields({
              title: '',
              owner: '',
          });

  };
  
    return (
      <section>
        <form className={buttonVisible} onSubmit={onFormSubmit}>
            <div>
                {/* <label htmlFor="title">Title:</label> */}
                <input 
                  class="NewBoardForm__form-input" 
                  name="title" 
                  value={formFields.title} 
                  onChange={onTitleChange}
                  placeholder="BOARD TITLE" />
            </div>
            <div>
                {/* <label htmlFor="owner" >Owner:</label> */}
                <input 
                  class="NewBoardForm__form-input"
                  name="owner"
                  value={formFields.owner} 
                  onChange={onOwnerChange} 
                  placeholder="OWNER NAME" />
            </div>
            <input
              class="NewBoardForm__form-submit-btn"
              type="submit"
              value="add new board" />
        </form>

        <button 
          class="ShowHideButton" 
          onClick={updateBoardFormVisibility}>
              {buttonName} New Board Form
          </button>

      </section>
    );
  };

  NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
  };
  
  export default NewBoardForm;