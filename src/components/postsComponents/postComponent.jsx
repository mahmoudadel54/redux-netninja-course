import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

//actions
import { deletePost } from '../../actions/postActions';

function PostComponent(props) {
    console.log(props.post);
    let history = useHistory()
    const handleDeletePost =()=>{
        console.log(props.deletePost);
        props.deletePost(props.post.id)
        history.replace("/posts")
    }
    
    return (
        <>
    {props.post?(

        <div style={{margin:'10vw', background:'gray'}}>
        <h1>Post No: {props.post.id}</h1>
        <h2>Post Title: {props.post.title}</h2>
        <h3>Post Body: {props.post.body}</h3>
        <button onClick={handleDeletePost}>Delete</button>
        </div>
        ):(
            <h1>Item Deleted</h1>
        )}
        </>
    )
}

// this function to get posts only from state and send it to props by injecting it to connect function 

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.post_id;
    // console.log(state, ownProps);
    return {
        post:state.posts.find(post=>post.id==id)
    }
}

//using dipatch in components to make an action and send it to props by injecting it to connect function
const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost:(id)=>{dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)