import MoviesGrid from "../components/MoviesGrid/MoviesGrid";

const Cartelera = () => {
    return (
        <>
      
            <MoviesGrid url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=31e421d77201e7a1eefe33f85b67fa3b&page=" title="Peliculas en Cartelera"/>
        </>
    )

}

export default Cartelera;