import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards, onBoardSelect }) => {

  const getBoardList = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          board={board}
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          onBoardSelect={onBoardSelect}
        />
      );
    });
  };
  return <ul>{getBoardList(boards)}</ul>;
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
  onBoardSelect: PropTypes.func,
};

export default BoardList;
