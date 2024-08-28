import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
 
class App extends Component {
  constructor() {
    super();
    this.colorMap = new Map();
    this.state = { "clickTrigger": false, "demOrRep": null };
    this.electoralCount = new Map();
    this.setElectoralVotes(this.electoralCount)
    this.demCount = 0;
    this.repCount = 0;
  }

  setElectoralVotes = (map) => {
    map.set("AL", 9)
    map.set("AK", 3)
    map.set("AZ", 11)
    map.set("AR", 6)
    map.set("CA", 54)
    map.set("CO", 10)
    map.set("CT", 7)
    map.set("DE", 3)
    map.set("FL", 30)
    map.set("GA", 16)
    map.set("HI", 4)
    map.set("ID", 4)
    map.set("IL", 19)
    map.set("IN", 11)
    map.set("IA", 6)
    map.set("KS", 6)
    map.set("KY", 8)
    map.set("LA", 8)
    map.set("ME", 4)
    map.set("MD", 10)
    map.set("MA", 11)
    map.set("MI", 15)
    map.set("MN", 10)
    map.set("MS", 6)
    map.set("MO", 10)
    map.set("MT", 4)
    map.set("NE", 5)
    map.set("NV", 6)
    map.set("NH", 4)
    map.set("NJ", 14)
    map.set("NM", 5)
    map.set("NY", 28)
    map.set("NC", 16)
    map.set("ND", 3)
    map.set("OH", 17)
    map.set("OK", 7)
    map.set("OR", 8)
    map.set("PA", 19)
    map.set("RI", 4)
    map.set("SC", 9)
    map.set("SD", 3)
    map.set("TN", 11)
    map.set("TX", 40)
    map.set("UT", 6)
    map.set("VT", 3)
    map.set("VA", 13)
    map.set("WA", 12)
    map.set("WV", 4)
    map.set("WI", 10)
    map.set("WY", 3)
  }

  clickState = (event) => {
    this.setState({"clicked": !this.state.clickTrigger})
    const state = event.target.dataset.name
    console.log(state)
    if (this.state.demOrRep === "dem" && this.colorMap.get(state) !== "blue") {
      if (this.colorMap.get(state) === "red") {
        this.repCount -= this.electoralCount.get(state)
      }
      this.colorMap.set(state, "blue")
      this.demCount += this.electoralCount.get(state)
    } 
    else if (this.state.demOrRep === "rep" && this.colorMap.get(state) !== "red") {
      if (this.colorMap.get(state) === "blue") {
        this.demCount -= this.electoralCount.get(state)
      }
      this.colorMap.set(state, "red")
      this.repCount += this.electoralCount.get(state)
    }
  }
 
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "AL": {
        fill: this.colorMap.get("AL")
      },
      "AK": {
        fill: this.colorMap.get("AK")
      },
      "AZ": {
        fill: this.colorMap.get("AZ")
      },
      "AR": {
        fill: this.colorMap.get("AR")
      },
      "CA": {
        fill: this.colorMap.get("CA")
      },
      "CO": {
        fill: this.colorMap.get("CO")
      },
      "CT": {
        fill: this.colorMap.get("CT")
      },
      "DE": {
        fill: this.colorMap.get("DE")
      },
      "FL": {
        fill: this.colorMap.get("FL")
      },
      "GA": {
        fill: this.colorMap.get("GA")
      },
      "HI": {
        fill: this.colorMap.get("HI")
      },
      "ID": {
        fill: this.colorMap.get("ID")
      },
      "IL": {
        fill: this.colorMap.get("IL")
      },
      "IN": {
        fill: this.colorMap.get("IN")
      },
      "IA": {
        fill: this.colorMap.get("IA")
      },
      "KS": {
        fill: this.colorMap.get("KS")
      },
      "KY": {
        fill: this.colorMap.get("KY")
      },
      "LA": {
        fill: this.colorMap.get("LA")
      },
      "ME": {
        fill: this.colorMap.get("ME")
      },
      "MD": {
        fill: this.colorMap.get("MD")
      },
      "MA": {
        fill: this.colorMap.get("MA")
      },
      "MI": {
        fill: this.colorMap.get("MI")
      },
      "MN": {
        fill: this.colorMap.get("MN")
      },
      "MS": {
        fill: this.colorMap.get("MS")
      },
      "MO": {
        fill: this.colorMap.get("MO")
      },
      "MT": {
        fill: this.colorMap.get("MT")
      },
      "NE": {
        fill: this.colorMap.get("NE")
      },
      "NV": {
        fill: this.colorMap.get("NV")
      },
      "NH": {
        fill: this.colorMap.get("NH")
      },
      "NJ": {
        fill: this.colorMap.get("NJ")
      },
      "NM": {
        fill: this.colorMap.get("NM")
      },
      "NY": {
        fill: this.colorMap.get("NY")
      },
      "NC": {
        fill: this.colorMap.get("NC")
      },
      "ND": {
        fill: this.colorMap.get("ND")
      },
      "OH": {
        fill: this.colorMap.get("OH")
      },
      "OK": {
        fill: this.colorMap.get("OK")
      },
      "OR": {
        fill: this.colorMap.get("OR")
      },
      "PA": {
        fill: this.colorMap.get("PA")
      },
      "RI": {
        fill: this.colorMap.get("RI")
      },
      "SC": {
        fill: this.colorMap.get("SC")
      },
      "SD": {
        fill: this.colorMap.get("SD")
      },
      "TN": {
        fill: this.colorMap.get("TN")
      },
      "TX": {
        fill: this.colorMap.get("TX")
      },
      "UT": {
        fill: this.colorMap.get("UT")
      },
      "VT": {
        fill: this.colorMap.get("VT")
      },
      "VA": {
        fill: this.colorMap.get("VA")
      },
      "WA": {
        fill: this.colorMap.get("WA")
      },
      "WV": {
        fill: this.colorMap.get("WV")
      },
      "WI": {
        fill: this.colorMap.get("WI")
      },
      "WY": {
        fill: this.colorMap.get("WY")
      },
    };
  };
 
  demCounterOnClick = (event) => {
    this.setState({"demOrRep": "dem"})
    console.log("Democrats!")
  }

  repCounterOnClick = (event) => {
    this.setState({"demOrRep": "rep"})
    console.log("Republicans!")
  }

  render() {
    return (
      <React.Fragment>
        <div id="demCounter" onClick={this.demCounterOnClick}>Laffin' Kamala: {this.demCount}</div>
        <div id="repCounter" onClick={this.repCounterOnClick}>Orange Cheeto: {this.repCount}</div>
        <div className="App">
        <USAMap customize={this.statesCustomConfig()} onClick={this.clickState} />
        </div>
      </React.Fragment>
    );
  }
}
 
export default App;
