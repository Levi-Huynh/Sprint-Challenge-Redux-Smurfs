import React from "react";
import { connect } from "react-redux";

import {postSmurf} from "../actions/index";

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        newSmurf: {
            name: "",
            age: "",
           height: ""
        }

        };

    }


handleChange = e => {
    e.persist();
    let value = e.target.value;
    this.setState(prevState => ({
        newSmurf: {
            ...prevState.newSmurf,
            [e.target.name]: value
        }
      }));
};

postMessage = e => {
 e.preventDefault();
    this.props.postSmurf(this.state.newSmurf);
    this.setState({
        newSmurf: {
            name: "",
            age: "",
           height: ""
        }
    });
   this.props.history.push('/');
  
};

render() {
 return (
    <div >
    <h2>Post (add) a new Smurf </h2>
    <form >
    <input
    type="text"
    name="name"
    placeholder="name"
    onChange={this.handleChange}
    value={this.state.newSmurf.name} />
    <input
    type="text"
    name="age"
    placeholder="age"
    onChange={this.handleChange}
    value={this.state.newSmurf.age} />
    <input
    type="text"
    name="height"
    placeholder="height"
    onChange={this.handleChange}
    value={this.state.newSmurf.height}/>
  
   
        <button onClick={this.postMessage} type="submit"> Add Smurf</button>
      
        </form>
        </div>
    )}

}

function mapStateToProps (state) {
    return {};
}

export default connect(
    mapStateToProps,
    {postSmurf} 
)(SmurfForm);