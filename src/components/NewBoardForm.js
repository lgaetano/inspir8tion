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
      <div>
        <button className='HideButton' onClick={updateBoardFormVisibility}>
              {buttonName} New Board Form
        </button>
      {/* <button onClick={updateBoardFormVisibility}>
              {buttonName} New Board Form
        </button> */}
      {/* <section className='NewBoardForm'> */}
        <h2>Add New Board:</h2>
        
        <form className={buttonVisible} onSubmit={onFormSubmit}>
            <div className='TitleInput'>
                <label htmlFor="title"></label>
                <input 
                  class="NewBoardForm__form-input" 
                  name="title" 
                  placeholder='TITLE'
                  value={formFields.title} 
                  onChange={onTitleChange}
                  placeholder="BOARD TITLE" />
            </div>
            <div className="OwnerInput">
                <label htmlFor="owner" ></label>
                <input 
                  class="NewBoardForm__form-input"
                  name="owner"
                  placeholder='OWNER'
                  value={formFields.owner} 
                  onChange={onOwnerChange} 
                  placeholder="OWNER NAME" />
            </div>
            <input className='SubmitButton'
                type="submit"
                value="+ add board" />
        </form>
      {/* </section> */}
      </div>
    );
  };

  NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
  };
  
  export default NewBoardForm;