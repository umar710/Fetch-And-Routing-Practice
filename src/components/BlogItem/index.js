import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, avatarUrl, author, topic, title} = blogItemDetails
  return (
    <Link className="blog-item" to={`/blogs/${id}`}>
      <div className="blog-card-container">
        <div>
          <img className="imageUrl" src={imageUrl} alt={title} />
        </div>
        <div>
          <p>{topic}</p>
          <h4>{title}</h4>
          <div>
            <img className="avatarUrl" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
