import React ,{ Component } from 'react';
import UpdateSmurfForm from '../components/UpdateSmurfForm';
import { connect } from "react-redux";

function UpdateSmurfContainer(props) {



return (
<div>
   {props.smurfs.map(smurf => (
    <div>
       
       <UpdateSmurfForm name={smurf.name}
      age={smurf.age}
   height={smurf.height}
      id={smurf.id}
      key={smurf.id}
    />

    
      

</div>
 ) )} 



</div>
)

}


function mapStateToProps (state) {
   return {   
      smurfs: state.smurfs,
   
      };
}

export default connect(
   mapStateToProps,
 
)(UpdateSmurfContainer);

