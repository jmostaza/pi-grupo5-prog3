import React from "react";
import "./SearchResultsGrid.css"
import HomeCard from "../HomeCard/HomeCard";
import { Component } from "react";

class SearchResultsGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="caja">
          <h2 className="title"> {this.props.title} </h2>
          <section className="popularesGrid">
            {this.props.movies &&
              this.props.movies.map((movies, idx) => {
                return <HomeCard key={idx} movies={movies} />;
              })}
          </section>
        </div>
      </>
    );
  }
}

export default SearchResultsGrid;