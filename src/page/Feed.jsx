import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [search, setSearch] = useState("")


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

      useEffect(() => {
        setFilteredPosts(posts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        ))
      }, [search, posts])

  return (
    <div className="max-w-3xl mx-auto my-8 px-4">
        <h1 className="text-3xl font-semibold mb-4">GDSC React Session (Social Media Feed)</h1>
        <input className='mt-4 px-4 w-full py-2 mb-4 rounded-md bg-white shadow-md' value={search} onChange={e => setSearch(e.currentTarget.value)}></input>
        {search}
        <div className='flex flex-col gap-4'>
        {filteredPosts.map((post) => {
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
