import React from 'react';
import UpdateSmurfForm from '../components/UpdateSmurfForm';

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

export default UpdateSmurfContainer;