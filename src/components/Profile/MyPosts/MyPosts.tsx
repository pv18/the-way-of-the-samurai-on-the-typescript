import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css'

type PostDataType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props:any) => {
    const postsElement = props.state.posts
        .map((p:PostDataType) =><Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить пост</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;