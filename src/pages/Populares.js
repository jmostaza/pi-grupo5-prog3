import HomeForm from "../components/HomeForm/HomeForm";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";

const Populares = () => {
    return (
        <>
            <HomeForm/>
            <MoviesGrid url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b" title="Peliculas Populares"/>
        </>
    )

}

export default Populares;