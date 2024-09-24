import {Component} from "react"
import { withRouter } from "react-router-dom";
import "./HomeForm.css"

class HomeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }

    handleFormChange(event) {
        this.setState({
            query: event.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.props.history.push("/searchresults", { query: this.state.query });
    }
    
    render(){
        return(
            <div>
                <form className="search-container">
                <input 
                    onChange={(event) => this.handleFormChange(event)}
                    name="query"
                    value= {this.state.query}
                    placeholder="Ingresá una pelicula"
                    className="input-form"
                />
                <button onClick={(e) => this.handleFormSubmit(e)}>Search</button>
                </form>
            </div>
        )
    
    }

}

export default withRouter(HomeForm);