import {Component} from "react"
import { withRouter } from "react-router-dom";


class HomeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }
    // handleCancelSubmit (event) {
    //     event.preventDefault();
    // }

    handleFormChange(event) {
        this.setState({
            query: event.target.value
        })
    }
    handleFormSubmit() {
        this.props.history.push("/searchresults", { query: this.state.query });
    }
    
    render(){
        return(
            <div>
                <form >
                <input 
                    onChange={(event) => this.handleFormChange(event)}
                    name="query"
                    value= {this.state.query}
                />
                <button onClick={() => this.handleFormSubmit()}>Search</button>
                </form>
            </div>
        )
    
    }

}

export default withRouter(HomeForm);