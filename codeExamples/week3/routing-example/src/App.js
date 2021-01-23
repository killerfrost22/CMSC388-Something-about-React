import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Body />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
