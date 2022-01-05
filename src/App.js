import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";


export const URL = "https://inspir8tion-board.herokuapp.com/boards";
const CARDS_DATA = {
  "cards": [
      {
          "board_id": 1,
          "card_id": 1,
          "likes_count": 0,
          "message": "Blertyy blerty blaaaah blaaaahh"
      },
      {
          "board_id": 1,
          "card_id": 3,
          "likes_count": 0,
          "message": "New_message"
      }
  ],
  "id": 1,
  "title": "Blabla"
}
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
    setSelectedBoard(`${title} - ${owner}`);
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
        Our awesome board... in progress
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
          <p>"Select a Board from the Board List!"</p>
        ) : selectedBoard}
        {/* null above should eventually be setSelectedBoard*/}
        {/* <div>
          <Board onBoardSelect={selectedBoard} boards={boards} />
        </div> */}
        <div>
        <NewBoardForm
          isBoardFormVisible={isBoardFormVisible}
          updateBoardFormVisibility={updateBoardFormVisibility}
        />
        </div>
        <div>
          <CardList cards={CARDS_DATA}/>
        </div>
      </main>
    </div>
  );
};

export default App;
