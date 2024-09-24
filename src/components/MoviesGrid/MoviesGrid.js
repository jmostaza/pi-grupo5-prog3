import React from "react";
import HomeCard from "../HomeCard/HomeCard";
import { Component } from "react";
import "./MoviesGrid.css";
import Loader from "../Loader/Loader";

class MoviesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      actualPage: 1,
      cargando: true,
      filterValue: "",
      moviesFiltrado: [],
    };
  }

  componentDidMount() {
    this.setState({ cargando: true });
    fetch(`${this.props.url}${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: data.results,
          actualPage: this.state.actualPage + 1,
          cargando: false,
          moviesFiltrado: data.results,
        })
      )
      .catch((err) => console.error(err));
  }
  handleFilterChange = (event) => {
    const filterValue = event.target.value;
    this.setState({ filterValue });
    const { movies } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );
    this.setState({ moviesFiltrado: filteredMovies });
    console.log("Filtered movies:", filteredMovies);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      moviesFiltrado: this.state.movies,
      filterValue: "",
    });
  };

  handleLoadMore() {
    this.setState({ cargando: true });
    fetch(`${this.props.url}${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movies: this.state.movies.concat(data.results),
          actualPage: this.state.actualPage + 1,
          cargando: false,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { movies, moviesFiltrado, filterValue } = this.state;

    return (
      <>
        {this.state.cargando ? (
          <Loader />
        ) : (
          <>
            <div className="caja">
              <h2 className="title"> {this.props.title}</h2>
              <form className="search-container" onSubmit={this.handleSubmit}>
                <input
                  className="input-form"
                  type="text"
                  value={this.state.filterValue}
                  onChange={this.handleFilterChange}
                  placeholder="Filtrar por título"
                />
                <button type="submit">Reset</button>
              </form>
              {filterValue ? (
                moviesFiltrado.length > 0 ? (
                  <section className="popularesGrid">
                    {moviesFiltrado.map((movie, idx) => {
                      return <HomeCard key={idx} movies={movie} />;
                    })}
                  </section>
                ) : (
                  <p className="pfilter">
                    NO HAY PELICULAS DISPONIBLES PARA TU BUSQUEDA
                  </p>
                )
              ) : (
                <section className="popularesGrid">
                  {movies.map((movies, idx) => (
                    <HomeCard key={idx} movies={movies} />
                  ))}
                  <div>
                    <button onClick={() => this.handleLoadMore()}>
                      Cargar Más
                    </button>
                  </div>
                </section>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default MoviesGrid;
