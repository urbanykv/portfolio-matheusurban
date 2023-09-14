import React, { Component } from "react";
import Slide from "./components/slide";
import Header from "./components/header/header";

class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Slide/>
      </div>
    )
  }
}

export default App;