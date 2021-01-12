import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Zip from "./components/Zip";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  update = (e) => {
    let zip = e.target.value;
    const url = "http://ctp-zip-api.herokuapp.com/zip/" + zip;
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        this.setState({ results: data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <Header />
        <input type="text" name="zip" onChange={this.update} />
        <Zip results={this.state.results} />
      </div>
    );
  }
}

export default App;
