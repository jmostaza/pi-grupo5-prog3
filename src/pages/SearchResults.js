import { Component } from "react";
import SearchResultsGrid from "../components/SearchResultsGrid/SearchResultsGrid";
import Loader from "../components/Loader/Loader";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            cargando: true,
        };
    }

    componentDidMount() {
        const query = this.props.location.state.query;
        fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=31e421d77201e7a1eefe33f85b67fa3b`
        )
            .then((response) => response.json())
            .then((data) => {
              console.log(data.results, 'todos los datos, query')
                this.setState({
                    movies: data.results,
                    cargando: false,
                });
            })
            .catch((error) => console.log(error));
    }

    render() {
        const { movies } = this.state;
        return (
            <div>
            {this.state.cargando ? (
               <Loader/>
            ) : (
                this.state.movies && this.state.movies.length > 0 ? (
                    <SearchResultsGrid movies={movies} />
            ): (
                <div className="cajaNoDisp"> <p className="NoDisponible">   NO HAY PELICULAS DISPONIBLES PARA TU BUSQUEDA </p></div>
               
            ))}
        </div>
        );
    }
}

export default SearchResults;