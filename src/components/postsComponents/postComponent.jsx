import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function PostComponent(props) {
    // let {id, title, body} = props.post;
    let { deletePost } = props;
    console.log(props.post);
    let history = useHistory()
    const handleDeletePost =()=>{
        console.log(deletePost);
        deletePost(props.post.id)
        history.push("/posts")
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

const mapStateToProps = (state, ownProps)=>{
    let id = ownProps.match.params.post_id;
    // console.log(state, ownProps);
    return {
        post:state.posts.find(post=>post.id==id)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost:(id)=>{dispatch({type:"DELETE_POST", id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComponent)