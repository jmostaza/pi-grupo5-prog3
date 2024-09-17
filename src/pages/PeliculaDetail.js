import Detail from '../components/Detail/Detail'
import { Component } from "react";

class PeliculaDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            movie: null
        }
    }
    componentDidMount(){

    const {id} = this.props.match.params
    const url= `https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.id === Number(id)){
                this.setState({
                    movie: data
                    
                })
               
            }
        })
        .catch(e => console.log(e));
    } 
    
    render(){
        const {movie} = this.state
        return <Detail movie={movie}/>
    }

    
}
export default PeliculaDetail