import React, { useState } from 'react';

import Header from './components/Header/Header';
import AddNickname from './components/AddNickname/AddNickname';

import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  const [item, setItem] = useState([
    {
      id: null,
      nickname: ''
    }
  ]);

  const toggleOpen = () => {
    setOpen(!isOpen);
  }

  const incrementCounter = () => {
    setCounter(prevState => prevState + 1);
  }

  const addNickname = (nick) => {
    // console.log("NEW PET NAME: " + nick);
    
    setItem([
      ...item,
      {
        id: item.length,
        nickname: nick
      }
    ]);
  }

  const nameList = item.map((item) => <h1 key={item.id}>{item.nickname}</h1>);

  return (
    <div className="App">
      <Header 
        isOpen={isOpen} 
        counter={counter} 
        item={item}
        toggleOpen={toggleOpen}
        handleIncrement={incrementCounter}
      />
      <AddNickname 
        addNickname={addNickname}
      />
      {nameList}
    </div>
  );
}

export default App;