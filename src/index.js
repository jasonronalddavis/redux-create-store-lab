// write your createStore function here

let container = document.getElementById('container');


function createStore(reducer) {
  let state
  function dispatch(action) {
    state = reducer(state, action)
    render()
  }
  function getState() {
    return state
  }
  return{dispatch, getState}
}




function candyReducer(state = [], action) {
    
  switch (action.type) {
    case 'ADD_CANDY':
  return  container.innerHTML += `${[state.candy, action.candy]}<br>`
    default:
      return state;
  }
}

function render() {
  if(store.getState()) { 
    let cont = store.getState().split().join('');
   container.innerHTML = cont 
    cont.replace( /,/g, "" );
      
  } else {
    throw new Error("the store's state has not been defined yet")
  }

};


// Use your createStore function and the functions provided here to create a store.
// Once the store is created, call an initial dispatch.
let store = createStore(candyReducer)
store.dispatch({type: '@@init'})