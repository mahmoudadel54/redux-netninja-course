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
    if(action.type==="ADD_TODO"){
      //change state (1st way -- traditional way)
      // const stateCopy = {...state}
      // stateCopy.todos = [...stateCopy.todos, action.todo]
      // return stateCopy
      
      //it is the 2nd way
      return{
        ...state,
        todos:[...state.todos, action.todo],
      }
    }else if(action.type==="ADD_POST"){
      return{
        ...state, 
        posts:[...state.posts, action.post]
      }
    }
    
  }
  //create a store and pass all reducers to it
  const store = createStore(firstReducer);      //once store is created, reducer will fire auomatically even if there is no dispatch

  //Subscribe the store -> takes js function that will fire every time a change in state happens
 store.subscribe(()=>{
  console.log('state updates');
  console.log(store.getState());    //to get the current state -> store.getState()
})  

//let's create an action
  //it is JS Object, must contain 'type' and can contain any payload data
  const todoAction = {
    type:'ADD_TODO',
    todo:'Take a Redux Course'
  }


  const todoActionNo2 = {
    type:'ADD_TODO',
    todo:'Watch lesson 2 in the Redux Course'
  }

  const addPostActionNo1 = {
    type:'ADD_POST',
    post:'Excercise yourself in the lesson 2'
  }

  //dispatch the action from store
  store.dispatch(todoAction);
  //what will happen : 
  //- go to the store with todoAction -> pass action to store's reducer -> fire the reducer
  store.dispatch(todoActionNo2);
  store.dispatch(addPostActionNo1);


 

  return (
    <div className="App">
      <h1>Hello Redux App</h1>
    </div>
  );
}

export default App;
