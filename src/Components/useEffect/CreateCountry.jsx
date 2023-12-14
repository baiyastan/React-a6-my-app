import React, {useState, useEffect} from 'react'
import axios from "axios"
import Post from './Post'
import "./Main.css"
import CreatePost from './CreatePost'

const API_URL = 'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/country'

function CreateCountry() {
    const [post, setPost] = useState([])

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get(API_URL)

                // console.log(res)

                if(res.status === 200) {
                    setPost(res.data)
                }
            }catch (error) {
                console.log(error)
            }
        }

        getPost()
    }, [])

    console.log(post)
  return (
    <div>
        <CreatePost />
        <div className='post'>
            {
                post.map((item) => (
                    <Post key={item.id} data={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default CreateCountry