import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({addBoardCallback, isBoardFormVisible, updateBoardFormVisibility}) => {
  const buttonVisible = isBoardFormVisible ? 'visible' : 'hidden';
  const buttonName = isBoardFormVisible ? 'Hide' : 'Show';

  const [formFields,setFormFields] = useState ({
    title: "",
    owner: ""
  })
  
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
              titleData: formFields.title,
              ownerData: formFields.owner
          });
  
          setFormFields({
              title: '',
              owner: '',
          });
  
  };
  
  
  
    return (
      <div>
        <button onClick={updateBoardFormVisibility}>
              {buttonName} New Board Form
        </button>
        <form className={buttonVisible} onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input name="title" value={formFields.title} onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="owner" value={formFields.owner} onChange={onOwnerChange}>Owner:</label>
                <input name="owner" />
            </div>
            <input
                type="submit"
                value="Add Board" />
        </form>
      </div>
    );
      
    
  };
  NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
  };
  
  
  export default NewBoardForm;