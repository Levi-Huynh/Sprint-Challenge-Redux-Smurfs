/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


import axios from 'axios';



export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  return axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log("get", res.data);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
    });
};

export const LOAD_NEW_SMURF= 'LOAD_NEW_SMUF';
export const NEW_SMURF_SUCCESS='NEW_SMURF_SUCCESS';

export const postSmurf = (data) => dispatch=> {
  dispatch({type:LOAD_NEW_SMURF});
  return axios
.post('http://localhost:3333/smurfs', data)
.then(res =>{
console.log("resolved:", res);
dispatch({type: NEW_SMURF_SUCCESS, payload: data})
})
.catch(err =>console.log(err));


};


export const FETCH_SMURF_UPDATE = "LOAD_SMURF_UPDATE";
export const SMURF_UPDATE_SUCCESS= "SMURF_UPDATE_SUCESS";

export const updateSmurf = (name, age, height, id) => dispatch => {
  dispatch({type: FETCH_SMURF_UPDATE});
  return axios
  .put(`http://localhost:3333/smurfs/${id}`, {name, age:Number(age), height})
  .then(res => {
    console.log("putResolved:", res);
    dispatch({type: SMURF_UPDATE_SUCCESS, payload: id});
  })
  .catch(err=> console.log(err));
}