import "./HomeGrid.css"
import { Component } from "react"
import HomeCard from "../HomeCard/HomeCard"
import { Link } from "react-router-dom"


class HomeGrid extends Component {
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
    
    render(){
    
        const { movies } = this.state
        const maxMovies = 5
        const filteredMovies = movies.filter((movie, idx) => idx < maxMovies);
        console.log(movies);


        return(
            
            <>
            <div className="caja">
            <h2 className="title"> {this.props.title} </h2>
             <section className="popularesGrid">
                {filteredMovies.map((movies, idx) => { return <HomeCard key={idx} movies={movies}/>})}
            </section>
            </div>
            <Link to={`${this.props.boton}`}><button>Ver todas</button></Link>
            </>
           
        )
    }

}

export default HomeGrid;