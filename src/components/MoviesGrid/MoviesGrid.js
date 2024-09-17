import React from "react"
import HomeCard from "../HomeCard/HomeCard"
import { Component } from "react"


class MoviesGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {

        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.results
            }))
            .catch(err => console.error(err));
    }

    render() {
        const { movies } = this.state

        return (
            <>
                <div className="caja">
                    <h2 className="title"> {this.props.title} </h2>
                    <section className="popularesGrid">
                        {movies.map((movies, idx) => { return <HomeCard key={idx} movies={movies} /> })}
                    </section>
                </div>

            </>

        )
    }

}

export default MoviesGrid;