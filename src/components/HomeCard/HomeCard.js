import "./HomeCard.css"
import { Component } from "react"
import { Link } from "react-router-dom"

class HomeCard extends Component {
    constructor(props){
        super(props)
        this.state= {
            showMore: false,
            favorite: false
        }
    }

    
    
    render(){
        const {original_title, poster_path, overview, id} = this.props.movies
        return(
           <article className="populares_card"> 
            <img  className="imagen" src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={original_title} />
            <p>{original_title}</p>
            <button className="more" onClick={()=>this.setState({
                showMore: !this.state.showMore
            })}> {this.state.showMore ? "Ocultar descripción" : "Ver descripción"} </button>
            {this.state.showMore &&
            <section className={this.state.showMore ? "extra" : "extra hidden"}>
                <p>{overview}</p>
            </section>}
            <Link to={`/movies/${id}`}><button>Detalle</button></Link>
            <i className="fa-regular fa-heart"></i>
         </article>
        )
    }

};

export default HomeCard