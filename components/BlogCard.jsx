import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function BlogCard({ title, body, id }) {

  return (
    <Link href={`/blogs/${id}`}>
      <div className='cardContainer'>
        {/* Set the width and height for the container */}
        <div className='cardImage'>
          <Image src={"https://picsum.photos/200/300"} alt='' width={200} height={300} />
        </div>
        <div className='cardBody'>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      </div>
    </Link>
  );
}
