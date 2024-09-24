import { Component } from "react";
import HomeCard from "../components/HomeCard/HomeCard";

class Favorite extends Component{
    constructor(props){
        super(props)
        this.state={
            movies:[]
        }
    }
    componentDidMount(){
        const storage= localStorage.getItem('favorites')
        if(storage !== null){
            const StorageParsed= JSON.parse(storage)
            Promise.all(
                StorageParsed.map(id=> 
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=31e421d77201e7a1eefe33f85b67fa3b`)
                    .then(response=> response.json())
            ))
            .then((data)=>{ this.setState({ movies: data})
        })
            
        }
    }
    
    render(){
        return(
              <div>
                <h1 className="title" >Favoritos</h1>
                {this.state.movies.length=== 0 ?(<p className="pFav">No hay peliculas en favoritos</p>) :
                ( <section className="popularesGrid">
                    {this.state.movies.map(movies => (
                          <HomeCard key={movies.id} movies={movies} />
                  ))}
                    </section>)
                  }
            </div>
           
        )
    }
}

export default Favorite