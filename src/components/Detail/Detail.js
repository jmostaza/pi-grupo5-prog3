import "./Detail.css";
import { Component } from "react";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import Loader from "../Loader/Loader";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  handleFavorite() {
    this.setState({
      favorite: !this.state.favorite,
    });
  }
  render() {
    const { movie } = this.props;
    return !movie ? (
      <Loader />
    ) : (
      <div className="contenedorPrinc">
        <div className="box-div">
          <h2 className="tituloDetail">{movie.title}</h2>
          <p className="Poverview">{movie.overview}</p>
          <img
            className="imgDet"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
          />
          <ul className="generos">
            Generos:{" "}
            {movie.genres.map((obj) => (
              <li>{obj.name}</li>
            ))}
          </ul>
          <div className="Poverview">
            <ul className="prods">
              <li>Estreno: {movie.release_date}</li>
              <li>Rating: {movie.popularity}</li>
              <li>Duracion: {movie.runtime}min</li>
              <li>
                {" "}
                <FavoriteIcon id={Number(movie.id)} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
