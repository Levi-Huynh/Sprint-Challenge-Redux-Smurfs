import React from "react";
import { connect } from "react-redux";
import Smurf from "../components/Smurf";
// import UpdateFriendForm from "./UpdateFriendForm";

const SmurfList = props => {
  {console.log("smurflist", props.smurfs)}
  if(!props.smurfs){return <h1>Loading</h1>}
  return (
    <ul>
      {props.smurfs.map(smurf => {
  
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </ul>
 
  );
};

export default SmurfList;
