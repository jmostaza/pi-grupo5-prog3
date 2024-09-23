import { Component } from "react"
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

class  FavoriteIcon extends Component {
    constructor(props){
        super(props)
        this.state= {
            favorite: false
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const parsedFavorite = JSON.parse(storage)
            const esFavorito= parsedFavorite.includes(this.props.id)
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
            if(!parsedFavorite.includes(this.props.id)){
                parsedFavorite.push(this.props.id)
                const stringFavorite= JSON.stringify(parsedFavorite)
                localStorage.setItem('favorites', stringFavorite)
            }
        }
        else{
            const firstFavorite= [this.props.id]
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
        const quitar= parsedFavorite.filter(id=> id !== this.props.id)
        const stringFavorite= JSON.stringify(quitar)
        localStorage.setItem('favorites', stringFavorite)
        this.setState({
            favorite: false
        })
    }
    
    render(){
        return(
            <div className="heart" onClick={()=> !this.state.favorite ? this.handleFavorite() : this.quitarFavorite() } > {this.state.favorite ?  <FaHeart size={15} /> : <FaRegHeart /> }</div>
        )
    }
}

export default FavoriteIcon