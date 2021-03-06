//========================
/* Create a redux store */
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);


//===========================
/* Get State from the Redux Store */
const store = Redux.createStore(
  (state = 5) => state
);

// change code below this line
const currentState = store.getState()

/* Define a redux action */
// Define an action here:
let action = {
  type: 'LOGIN'
}
//===========================
/* Define an Action Creator */
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action;
}

//========================
/* Dispatch an Action Event */
const store = Redux.createStore(
  (state = { login: false }) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());

//========================
/* Handle an Action in the Store */
