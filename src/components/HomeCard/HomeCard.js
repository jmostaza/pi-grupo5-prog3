import "./HomeCard.css"
import { Component } from "react"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class HomeCard extends Component {
    constructor(props){
        super(props)
        this.state= {
            showMore: false,
            favorite: false,
        }
    }

    handleFavorite() {
        this.setState({
            favorite: !this.state.favorite
        })
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
            
            {<div className="heart" onClick={()=> this.handleFavorite()} > {this.state.favorite ?  <FaHeart size={15} /> : <FaRegHeart /> }</div>}

         </article>
        )
    }

};

export default HomeCard