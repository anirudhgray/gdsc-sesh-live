import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log(response.data)
            setPosts(response.data);
          })
          .catch((error) => {
            console.error('Error fetching posts:', error);
          });
      }, []);

  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
        <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>

        <div className='flex flex-col gap-4'>
        {posts.map((post) => {
            return (
                <div className="bg-white p-4 shadow-md rounded-md hover:bg-blue-500 hover:text-white" key={post.id}>
                    <p className='font-bold' key={post.id}>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}
