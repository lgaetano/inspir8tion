// import React from 'react';
import Board from "./Board";

const BoardList = ({ boards, onBoardSelect }) => {
  console.log(boards);
  const getBoardListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          onBoardSelect={onBoardSelect}
        />
      );
    });
  };
  return <ul>{getBoardListJSX(boards)}</ul>;
};

export default BoardList;
/* will just pass props board through to Board */
