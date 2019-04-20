import React from "react";
import { connect } from "react-redux";

import SmurfList  from "../components/SmurfList";
// import actions
import {getData} from "../actions/index";
import UpdateSmurfContainer from '../components/UpdateSmurfContainer';


class SmurfListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call our action
    this.props.getData();
  }

  render() {
  
 
      // return something here to indicate that you are fetching data
  
    return (
      <div className="CharactersList_wrapper">
        {this.props.fetchingSmurfs? <h1>Loading</h1> : null}
       {console.log("I'm props", this.props.smurfs)}
        <SmurfList smurfs={this.props.smurfs} />
         <UpdateSmurfContainer smurfs={this.props.smurfs}/> 
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  console.log("in mstp", state.smurfs)
  return {
  smurfs: state.smurfs,
    fetchingSmurf: state.fetchingSmurf
  }
}

export default connect(
 (mstp), {getData: getData})
(SmurfListView);
