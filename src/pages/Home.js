// import Form from "../components/Form/Form";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import HomeForm from "../components/HomeForm/HomeForm";

const Home = () => {
    return (
        <>
            <HomeForm/>
            <HomeGrid url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b" title="Peliculas Populares"/>
            <HomeGrid url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=31e421d77201e7a1eefe33f85b67fa3b" title="Peliculas en Cartelera"/>
        </>
    )

}

export default Home;
