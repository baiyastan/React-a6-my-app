import React, {useState, useEffect} from 'react'
import axios from "axios"
import Post from './Post'
import "./Main.css"
import CreatePost from './CreatePost'

const API_URL = 'https://656df576bcc5618d3c244f13.mockapi.io/ap/v1/country'

function CreateCountry() {
    const [post, setPost] = useState([])

    const [isActive, setIsActive] =useState(false)

    const [country, setCountry] = useState({})

    const [service, setService] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get(API_URL)

                if(res.status === 200) {
                    setPost(res.data)
                    setService(false)
                }
            }catch (error) {
                console.log(error)
            }
        }

        getPost()
    }, [service])

    const handleGetId = async (id) => {
        setIsActive(true)

        try {
            const res = await axios.get(`${API_URL}/${id}`)
            if(res.status === 200) {
                setCountry(res.data)
            }
        }catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>
        <CreatePost clicked={setService}/>
        <div className='post'>
            {
                post.map((item) => (
                    <Post 
                        key={item.id}
                         data={item} 
                         update={handleGetId} 
                         
                         />
                ))
            }
        </div>
            {
                isActive && <div className='overlay'>
                    <div className='popup-container'>
                        <input 
                            type='text'
                            placeholder='name' 
                            value={country.name}
                            />
                        <input 
                            type='url' 
                            placeholder='Image url'
                            value={country.avatar}
                             />
                        <div className='btns'>
                            <button>Submit</button>
                            <button onClick={() => setIsActive(false)}>Close</button>
                        </div>
                    </div>
                </div>
            }
    </div>
  )
}

export default CreateCountry