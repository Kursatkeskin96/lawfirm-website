'use client'
import React from 'react';
import axios from 'axios';

export default function Page({ params }) {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts/${params.id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        // Handle error state here if needed
      }
    };

    fetchPost();
  }, [params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-screen pt-20'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
