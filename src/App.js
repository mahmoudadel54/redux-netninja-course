import './App.css';
import { createStore } from 'redux';
function App() {
  //the initial state 
  //it is JS Object
  const initState = {
    posts:[],
    todos:[]
  }

  //first create a reducer as store must contain one reducer at least
  //reducer is a js function that returns some of data from the store
  //params of reducer should be state (by default = initialized state of the store) ,action
  const firstReducer = (state = initState, action)=>{              
    console.log(action, state);
    // return []
  }
  //create a store and pass all reducers to it
  const store = createStore(firstReducer);      //once store is created, reducer will fire auomatically even if there is no dispatch


  //let's create an action
  //it is JS Object, must contain 'type' and can contain any payload data
  const todoAction = {
    type:'ADD_TODO',
    todo:'Take a Redux Course'
  }

  //dispatch the action from store
  store.dispatch(todoAction);
  //what will happen : 
  //1- go to the store with todoAction -> pass action to store's reducer -> fire the reducer

  return (
    <div className="App">
      <h1>Hello Redux App</h1>
    </div>
  );
}

export default App;
