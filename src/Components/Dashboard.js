import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PostDisplay from './PostDisplay';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.user_id}`).then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        const mappedPosts = this.state.posts.map((post, index) => {
            return (
                <PostDisplay key={index} post={post}/>
            )
        })
        return(
            <div>
                {mappedPosts}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(Dashboard);