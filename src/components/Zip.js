import React, { Component } from "react";

export class Zip extends Component {
  render() {
    return this.props.results.length !== 0 ? (
      this.props.results.map((result) => {
        return (
          <div>
            <p className = "header">{result.LocationText}</p> 
            <ul className="zip">
            <li className="list">State: {result.State}</li>
            <li className="list">Location: ({result.Lat}, {result.Long})</li>
            <li className="list">Population (estimated): {result.EstimatedPopulation}</li>
            <li className="list">Total Wages: {result.TotalWages}</li>
            </ul>
          </div>
        );
      })
    ) : (
      <div>No Results</div>
    );
  }
}

export default Zip;