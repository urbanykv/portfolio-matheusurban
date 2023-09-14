import React, { Component } from "react";
import './reset.css'
import Rotas from "./routes/rotas";

class App extends Component {
  render(){
    return(
      <div className="app">
        <Rotas/>
      </div>
    )
  }
}

export default App;