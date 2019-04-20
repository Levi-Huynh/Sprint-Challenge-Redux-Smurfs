1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Map, reduce, filter, concat. Returns new array based on logical callbacks passed. Object.assign /spread for objects, creates new object, copies another's properties and values and  updates what values we want to update in our new object.  


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions: An object with 2 properties, type and optional payload property.  Type is required. Type is a string that sepxlains what interaction just happened. Actions are dispatched to reducer as an argument, when reducer recieves the action, it will know how to update the state according to the type and payload on the action. 

reducers: Pure functions that take in the action as argument.  Has switch statements to look at action type then returned updated state.  Takes 2 arguments (initial state as default, and action).  Switch looks at action.type adn returns state as the default.  Has case for each action, which returns a new state object (using spread prop) and updating with action.payload.  
We are returning a brand new object. We do not update the state object and return that
We are using the spread operator to “spread” in our old state
We then update the one piece of data we want to update 

store:
Store contains the current state for the entire application, accessible to all components without prop drilling and controls all state changes (done through actions dispatched), when no change can occur to UI/component without the store. Hence known as single souce of truth.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    application state is a global state, component state is local state that only exists within the components  that carry that state. Good time for app state is using state that is needed by all of your components, or sharing state within deeply nested components and don't want to prop drill. Good time for componenet state is when no other components need that state except maybe one. 

1.  What is middleware?
The idea behind middleware is to intercept some process, run a function at the intercept point, then (usually) continue the process. Or, sometimes middleware stops the process entirely. When this “process” is kicked off, there is normally some data that is flowing through different functions. With middleware, when we “intercept” the process, we are usually trying to do something with the data that is flowing with the process.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux Thunk is a separate node package called redux-thunk. Since the Redux action -> reducer flow is synchronous, we will use Redux Thunk to make the flow asynchronous so we can make API calls from our action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
{connect}
