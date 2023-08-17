'use client'
import Image from 'next/image';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_KEY } = process.env;

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/mupq8815cpuv/entries?access_token=EeKYyt0P19tOwFjMlck2zet61nkvUCAfnWpvKvLtt6s&content_type=post`
  );
  return res.json();
  }

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        if (data && data.items && data.items.length > 0) {
          setBlogs(data.items.map((item) => {
            const blogText = item.fields.blogText;

            return {
              title: item.fields.title, // Add title property
              content: item.fields.content, // Add content property
            };
          }));
        } else {
          console.error('No blogs found');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
console.log(blogs)
  return (
    <div className="pt-20 h-screen">
      {blogs.map((blog, index) => (
        <div key={index} >
          <div className="max-w-md" style={{ whiteSpace: 'pre-line' }}>
            {blog.title}
          </div>
        </div>
      ))}
    </div>
  );
}