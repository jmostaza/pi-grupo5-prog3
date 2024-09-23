import "./Detail.css"
import { Component } from "react";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
class Detail extends Component {
    constructor(props) {
        super(props)
        this.state={
            favorite: false
        }
    }

    handleFavorite(){
        this.setState({
            favorite: !this.state.favorite
        })
    }
    render() {
         // ESTO DE LOADING ES DE PERSONA 2
         const { movie } = this.props
        if (!movie) {
            return (
            <div 
            className="loader">Loading...
            </div>
            )
        }

        const { title, overview, poster_path, genres, release_date,popularity, runtime, id } = this.props.movie
        return (
            <div className="contenedorPrinc">
                <div className="box-div">
                    <h2 className="tituloDetail">{title}</h2>
                    <p className="Poverview">{overview}</p>
                    <img className="imgDet" src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
                    <ul className="generos">Generos: {genres.map((obj) => <li>{obj.name}</li>)}</ul>
                    <div className="Poverview" >
                        <ul className="prods">
                            <li>Estreno: {release_date}</li>
                            <li>Rating: {popularity}</li>
                            <li>Duracion: {runtime}min</li>
                            <li> <FavoriteIcon id={Number(id)}/></li>
                            </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Detail