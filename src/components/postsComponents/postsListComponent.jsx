import React from 'react'
import { Link } from 'react-router-dom'

//connect function --> use it to get data to particular component -- look at final line in this component
import { connect } from 'react-redux';
import { deletePost } from '../../actions/postActions';

function PostsListComponent(props) {
    // const {deletePost} = props;
    const handleDeletePost =(id)=>{
        props.deletePost(id);
    }

    return (
        <div>
            {props.posts.length?(

                <table style={{textAlign:'center', margin:'3em'}}>
                <thead>
                    <tr>
                        <th style={{margin:'2em'}}>id</th>
                        <th style={{margin:'2em'}}>title</th>
                        <th style={{margin:'2em'}}>body</th>
                        <th style={{margin:'2em'}}></th>
                        <th style={{margin:'2em'}}></th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.map(post=>
                        <tr key={post.id}>
                            <td style={{marginLeft:'1em'}}>{post.id}</td>
                            <td style={{marginLeft:'1em'}}>{post.title}</td>
                            <td style={{marginLeft:'1em'}}>{post.body}</td>
                            <td style={{marginLeft:'1em'}}><Link className="btn btn-primary" to={`/posts/${post.id}`}> Details</Link></td>
                            <td style={{marginLeft:'1em'}} className="btn btn-danger" onClick={()=>handleDeletePost(post.id)}>Delete</td>
                        </tr>
                    )}
                    </tbody>
            </table>
                    )
                    :(<h2> There is no posts</h2>)}
        </div>
    )
}

// this function to get posts only from state and send it to props by injecting it to connect function 
const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}

//using dipatch in components to make an action and send it to props by injecting it to connect function
const mapDispatchToProps=(dispatch) =>{
    return {
        deletePost:(id)=>{dispatch(deletePost(id))}
    }
}

//in this line --> once connect fires it return a component 
//that wraps PostsListComponent to pass state to props
//connect returns higher order component that wrap the PostsListComponent
export default connect(mapStateToProps, mapDispatchToProps)(PostsListComponent);