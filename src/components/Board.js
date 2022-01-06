import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Board = (props) => {
  return (
    <div>
      <li onClick={() => props.onBoardSelect(props.board)}>
        Title column: {props.title}
        {/** will want to pull in board so above would be props.board.title */}
      </li>
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
