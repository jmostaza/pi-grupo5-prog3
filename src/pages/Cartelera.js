import HomeForm from "../components/HomeForm/HomeForm";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";

const Cartelera = () => {
    return (
        <>
            <HomeForm/>
            <MoviesGrid url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b" title="Peliculas en Cartelera"/>
        </>
    )

}

export default Cartelera;