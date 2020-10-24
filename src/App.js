import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
           See a mural we didn't see? Submit below.
        </p>
        <form>
          <label for="picture">Submit picture here</label>
          <br></br>
          <input type="text" id="pic" name="pic"></input>
          <br></br>
          <label for="picture">Any other information?</label>
          <br></br>
          <textarea id="info" rows="15" cols="40" placeholder="Artist name, Location, description, etc."></textarea> 
          <br></br>
          <input type="button" value="Submit" id="btnSubmit" onClick="sucessThx()"></input>
        </form>




      </header>
      
    </div>
  );
}

export default App;
