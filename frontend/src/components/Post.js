import React from 'react'
import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
  const port = "http://localhost:5000"
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={`${port}/` + cover} alt="img" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <p>by - <a className="author">{author.username}</a></p>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>

    </div>
  )
}

export default Post