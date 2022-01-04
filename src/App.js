import './App.css';
import NewBoardForm from './components/NewBoardForm';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewBoardForm/>
      </header>
    </div>
  );
}

export default App;
