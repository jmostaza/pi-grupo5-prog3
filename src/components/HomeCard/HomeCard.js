import "./HomeCard.css"
import { Component } from "react"

class HomeCard extends Component {
    constructor(props){
        super(props)
        this.state= {
            showMore: false,
        }
    }

    render(){
        const {original_title, poster_path, overview} = this.props.movies
        return(
           <article className="populares_card"> 
            <img src={` https://image.tmdb.org/t/p/w200/${poster_path}`} alt={original_title} />
            <p>{original_title}</p>
    
            <p className="more" onClick={()=>this.setState({
                showmore: !this.state.showMore
            })}>Ver descripción</p>
            {this.state.showMore &&
            <section>
                <p>{overview}</p>
            </section>}

           </article>
        )
    }

};

export default HomeCard