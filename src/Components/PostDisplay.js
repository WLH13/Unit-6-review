import React from 'react';

const PostDisplay = (props) => {
    return(
        <div>
            <img src={props.post.image_url} alt='user post' style={{width: '150px'}}/>
        </div>
    )
}

export default PostDisplay;