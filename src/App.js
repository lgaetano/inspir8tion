import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardList from "./components/BoardList";

export const URL = "https://inspir8tion-board.herokuapp.com/boards";

const App = () => {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState("Loading...");
  const [isBoardFormVisible, setBoardForm] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const updateBoardFormVisibility = () => {
    if (isBoardFormVisible === true) setBoardForm(false);
    else {
      setBoardForm(true);
    }
  };
  /** */
  const onBoardSelect = (title, owner) => {
    console.log(`${title} + "-" + ${owner}`);
  };

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            id: board.board_id,
            title: board.title,
            owner: board.owner,
          };
        });
        setStatus("Loaded");
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NewBoardForm
          isBoardFormVisible={isBoardFormVisible}
          updateBoardFormVisibility={updateBoardFormVisibility}
        />
      </header>
      <main>
        <div>
          {status === "Loading..." ? (
            `${status}`
          ) : (
            <BoardList boards={boards} onBoardSelect={onBoardSelect} />
          )}
        </div>
        {selectedBoard === null ? (
          <div>"Select a Board from the Board List!"</div>
        ) : null}
        {/* null above should eventually be setSelectedBoard*/}
        {/* <div>
          <Board onBoardSelect={selectedBoard} boards={boards} />
        </div> */}
      </main>
    </div>
  );
};

export default App;
