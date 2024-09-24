import React from "react"
import HomeCard from "../HomeCard/HomeCard"
import { Component } from "react"


class MoviesGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            actualPage: 1,
            cargando: true
        }
    }

    componentDidMount() {
        this.setState({ cargando: true })
        fetch(`${this.props.url}${this.state.actualPage}`)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.results,
                actualPage: this.state.actualPage + 1,
                cargando: false
            }))
            .catch(err => console.error(err));
    }
    handleLoadMore() {
        this.setState({ cargando: true })
        fetch(`${this.props.url}${this.state.actualPage}`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    movies: this.state.movies.concat(data.results),
                    //lo de filtered movies aca tambien
                    actualPage: this.state.actualPage + 1,
                    cargando: false
                }))
            .catch((err) => console.log(err))
    }

    render() {
        const { movies } = this.state

        return (
            <>
                {this.state.cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <div className="caja">
                            <h2 className="title"> {this.props.title}</h2>
                            <section className="popularesGrid">
                                {movies.map((movies, idx) => (
                                    <HomeCard key={idx} movies={movies} />
                                ))}
                            </section>
                        </div>
                        <div>
                            <button onClick={() => this.handleLoadMore()}>Cargar Más</button>
                        </div>
                    </>
                )}
            </>
        )
    }

}

export default MoviesGrid;