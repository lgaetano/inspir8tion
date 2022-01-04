import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Board = (props) => {
  // console.log(title);
  return (
    <div>
      <li onClick={props.chooseBoard}>Title column: {props.title}</li>

      <h2>{props.onBoardSelect}</h2>
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onBoardSelect: PropTypes.func,
};

export default Board;
