import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import AddNickname from './components/AddNickname/AddNickname';
import About from './components/pages/About';

import uuid from 'uuid';

import './App.css';
import Axios from 'axios';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  // const [item, setItem] = useState([
  //   {
  //     id: uuid.v4(),
  //     nickname: 'John'
  //   }
  // ]);
  const [item, setItem] = useState([]);

  const toggleOpen = () => {
    setOpen(!isOpen);
  }

  const incrementCounter = () => {
    setCounter(prevState => prevState + 1);
  }

  const addNickname = (nick) => {
    // console.log("NEW PET NAME: " + nick);
    
    // setItem([
    //   ...item,
    //   {
    //     id: uuid.v4(),
    //     nickname: nick
    //   }
    // ]);

    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: nick
    })
      .then(res => setItem([...item, res.data]));
  }

  const nameList = item.map((item) => {
    // console.log(item.id);
    return(
      <h1 key={item.id}>{item.title}</h1>
    );
  });

  useEffect(() => {
    // console.log("EFFECT!");
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => setItem(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header 
          isOpen={isOpen} 
          counter={counter} 
          item={item}
          toggleOpen={toggleOpen}
          handleIncrement={incrementCounter}
        />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddNickname 
              addNickname={addNickname}
            />
            <div>{nameList}</div>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;