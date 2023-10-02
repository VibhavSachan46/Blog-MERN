import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
  const port = "http://localhost:5000"
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`${port}/post`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])
  return (
    <div>
    <h2 className='quote'>Taking control of your daily life is easy when you know how!</h2>
      <div className="cards">
        {posts.length > 0 && posts.map(post => (
          <Post {...post} />
        ))}
      </div>
    </div>

  )
}

export default IndexPage