import React from "react";
import { connect } from "react-redux";
import {updateSmurf} from "../actions/index";


class UpdateSmurfForm extends React.Component {
constructor(props) {
    super(props);
    this.state={
      
        editing: false,
      

         name1: this.props.name,
        age1: this.props.age,
       height1: this.props.height

    };
}





    

    handleChange = (e, input) => {
    const key = input+"1";
    this.setState({
        
        [key]: e.target.value
       
    });
    
    };
    



putMessage = e => {
    e.preventDefault();
    this.props.updateSmurf(this.state.name1, this.state.age1, 
        this.state.height1, this.props.id);
        
};

//must put () with event inside parenth for onChange so that it only invokes
//the method when event occurs on it..& also passes allows you to pass through 
//specific parameters in string form (can't really pass through e.target.name)

render() {

    return (
        <div>
  
    <div className='friend-form'>
    <h2>Update Smurf (put)</h2>
    <form onSubmit={this.putMessage.bind(this)}>
        <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) =>this.handleChange(e, 'name')}
        // value={this.state.nameInput} 
          value={this.state.name1} 
        />

        <input
        type="text"
        name="age"
        placeholder="age"
        onChange={(e) =>this.handleChange(e, 'age')}
        // value={this.state.ageInput}
        value={this.state.age1}
        />

        <input
        type="text"
        name="height"
        placeholder="height"
        onChange={(e) =>this.handleChange(e, 'height')}
        // value={this.state.emailInput}
        value={this.state.height1}
        
        />
    
         
          <button onClick={this.putMessage.bind(this)}> Update Smurf</button>
         {/* <button onClick={() =>this.props.delete(this.props.friends.id) }>Delete Friend</button> */}
      


    </form>
    
    </div>
    </div>
    );
}
};


function mapStateToProps (state) {
    return {   
       };
}

export default connect(
    mapStateToProps,
    {updateSmurf: updateSmurf } 
)(UpdateSmurfForm);

