import React, { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ blog, handleDelete }) => {
  const [showList, setShowList]=useState(false)
  const [likes, setLikes]=useState(blog.likes)

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = () => {
    blog.likes+=1
    setLikes(blog.likes)
    blogService.update(blog.id,blog)
  }


  return(
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        <button onClick={() => setShowList(!showList)}>{showList? 'hide':'show'}</button>
      </div>
      {
        showList ?
          <div>
            <p>
              {blog.url}
            </p>
            <p>
              {likes} <button onClick={handleLike} >Like</button>
            </p>
            <button onClick={() => handleDelete(blog)}>Remove</button>
          </div>:null
      }
    </div>
  )}

export default Blog
