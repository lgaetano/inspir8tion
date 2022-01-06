import PropTypes from "prop-types";

const Board = (props) => {
  return (
    <li onClick={() => props.onBoardSelect(props.board)}>
      Title column: {props.title}
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onBoardSelect: PropTypes.func,
};

export default Board;
