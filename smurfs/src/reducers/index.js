/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE,
  LOAD_NEW_SMURF, NEW_SMURF_SUCCESS, FETCH_SMURF_UPDATE, 
 SMURF_UPDATE_SUCCESS} from "../actions/index";
  

 const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true,
        errorStatusCode: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingSmurfs: false,
       smurfs: action.payload
      
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload.data.error,
        errorStatusCode: action.payload.status
      };
      case LOAD_NEW_SMURF:
      return {
        ...state,
        error: '',
  
        
      };

      case NEW_SMURF_SUCCESS:
      
        let newSmurf ={
          id: "", name: "", age:"", height: ""}
        
       return{ ...state, smurfs: [...state.smurfs, newSmurf] };
      
     case FETCH_SMURF_UPDATE:
     return{ ...state, error:""};

       case SMURF_UPDATE_SUCCESS:
       let updateSmurf = {
         id: "", name:"", age:"", email:""
       }
       return{...state, smurfs: [...state.smurfs, updateSmurf]


       };

    default:
      return state;
  }
};

export default reducer;
   
