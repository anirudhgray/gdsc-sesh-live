import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PostDetails() {
    const {id} = useParams()
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // fetch post
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setPost(response.data);
        })
        .catch((error) => {
            console.error('Error fetching post details:', error);
        });

        // fetch post comments
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => {
            setComments(response.data);
            console.log(response.data)
        })
        .catch((error) => {
            console.error('Error fetching comments:', error);
        });
    }, [id]);
    
  return (
    <div>
        Comments on this post:
        <h1>{post?.title}</h1>
        {comments.map((comment) => {
            return (
                    <div className="bg-gray-100 p-2 rounded-md" key={comment.id}>
                        <p className='font-bold' key={comment.id}>{comment.name}</p>
                        <p>{comment.body}</p>
                    </div>
            )
        })}
    </div>
  )
}
