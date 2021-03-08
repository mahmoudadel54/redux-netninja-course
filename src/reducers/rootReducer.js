const initState = {
    posts:[
        {id:1, title:"Post1", body:"POOOOOOOOOOOOOSTTTTTTTTTTTTTT 1 POOOOOOOOOOOSTTTTTTTTTT1"},
        {id:2, title:"Post2", body:"POOOOOOOOOOOOOSTTTTTTTTTTTTTT 2 POOOOOOOOOOOSTTTTTTTTTT2"},
        {id:3, title:"Post3", body:"POOOOOOOOOOOOOSTTTTTTTTTTTTTT 3 POOOOOOOOOOOSTTTTTTTTTT3"},
        {id:4, title:"Post4", body:"POOOOOOOOOOOOOSTTTTTTTTTTTTTT 4 POOOOOOOOOOOSTTTTTTTTTT4"},

    ],
    todos:[]
}

const rootReducer = (state=initState, action)=>{
   if (action.type==="DELETE_POST") {
           let newPosts = state.posts.filter(post=>post.id!==action.id)
           console.log(action.id,newPosts);
           return {
               ...state,
               posts:newPosts
           }
        }
        return state
   
} 

export default rootReducer;