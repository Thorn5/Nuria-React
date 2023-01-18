import React from 'react';
import {useParams} from 'react-router-dom';


const Post = () => {

    const id = useParams();

    console.log(id.id);

    
  return (
    <div>Post detail page</div>
  )
}

export default Post