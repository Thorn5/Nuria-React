import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';

const Posts = () => {

    const navigation = useNavigate();

    const posts = [
        {
            id: 1,
            value: 'POST 1'
        },
        {
            id: 2,
            value: 'POST 3'
        },
        {
            id: 3,
            value: 'POST 4'
        },

    ]
  return (
    <>
    {posts.length ? posts.map((post) => (

        <div key={post.id} onClick={() => navigation(`post/${post.id}`)}>
            <p>{post.value}</p>
        </div>
    )) : null}

    </>
  )
}

export default Posts