import {useState, useEffect} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const BlogItemDetails = props => {
  const [blogDetails, setBlogDetails] = useState({})
  const [isLoader, setLoader] = useState(true)

  useEffect(() => {
    const {match} = props
    const {params} = match
    const {id} = params

    const getBlogDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      console.log(data)
      const updatedData = {
        title: data.title,
        avatarUrl: data.avatar_url,
        author: data.author,
        imageUrl: data.image_url,
        content: data.content,
      }
      setBlogDetails(updatedData)
      setLoader(false)
    }
    getBlogDetails()
  }, [props])

  const {title, avatarUrl, author, imageUrl, content} = blogDetails

  return (
    <div>
      {isLoader ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <div className="blog-card-container">
            <img
              className="avatarUrl"
              src={avatarUrl}
              alt={title}
              key={title}
            />
            <p>{author}</p>
          </div>
          <img className="image-Url" src={imageUrl} alt={title} />
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}

export default BlogItemDetails
