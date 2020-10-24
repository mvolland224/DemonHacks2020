// JavaScript source code
import React, { useCallback } from "react";

import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href= "file:///C:/Users/madla/OneDrive/Desktop/DemonHacks2020/my-app/src/AboutUs.html" // add link here to about us page
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>

        <p>

        {"Don't see the art  you're looking for? Submit artwork"}

        </p>

        <a
            className="App-link"
            href= "https://reactjs.org/docs/cdn-links.html" // insert link to leticia's code
            target="_blank"
            rel= "noopener noreferrer"
        >
            here  
        </a>
      </header>
    </div>
  );
}



export default App;