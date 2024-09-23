import "./HomeCard.css"
import { Component } from "react"
import { Link } from "react-router-dom"
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";


class HomeCard extends Component {
    constructor(props){
        super(props)
        this.state= {
            showMore: false,
            favorite: false,
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedFavorite = JSON.parse(storage)
            const esFavorito= parsedFavorite.includes(this.props.movies.id)
            if(esFavorito){
                this.setState({
                    favorite:true
                })
            }
        }
    }

    handleFavorite() {
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedFavorite = JSON.parse(storage)
            parsedFavorite.push(this.props.movies.id)
            const stringFavorite= JSON.stringify(parsedFavorite)
            localStorage.setItem('favorites', stringFavorite)
        }
        else{
            const firstFavorite= [this.props.movies.id]
            const stringFavorite= JSON.stringify(firstFavorite)
            localStorage.setItem('favorites', stringFavorite)
        }
        this.setState({
            favorite: true
        })
    }
    quitarFavorite(){
        const storage= localStorage.getItem('favorites')
        const parsedFavorite= JSON.parse(storage)
        const quitar= parsedFavorite.filter(id=> id !== this.props.movies.id)
        const stringFavorite= JSON.stringify(quitar)
        localStorage.setItem('favorites', stringFavorite)
        this.setState({
            favorite: false
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
            
            <FavoriteIcon id={id}/>

         </article>
        )
    }

};

export default HomeCard