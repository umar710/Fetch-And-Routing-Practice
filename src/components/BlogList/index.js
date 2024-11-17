import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

const BlogList = () => {
  const [blogList, setBlogList] = useState([])
  const [isLoader, setLoader] = useState(true)

  useEffect(() => {
    const getBlogData = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      console.log(data)
      const updatedBlogData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        topic: eachItem.topic,
        author: eachItem.author,
        avatarUrl: eachItem.avatar_url,
      }))
      setBlogList(updatedBlogData)
      setLoader(false)
    }
    getBlogData()
  }, [])

  return (
    <div>
      {isLoader ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        blogList.map(eachItem => (
          <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
        ))
      )}
    </div>
  )
}

export default BlogList
