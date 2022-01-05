import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
      <li>Message: {props.card.message}</li>
      <li>Likes: {props.card.likes_count}</li>
        {/** will want to pull in board so above would be props.board.title */}
        <li>+1</li>
      </ul>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
//   onBoardSelect: PropTypes.func,
// };

export default Card;