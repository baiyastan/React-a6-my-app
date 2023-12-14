import React from 'react'
import "./Main.css"

function Post({data}) {
    console.log(data)
  return (
    <div className='item-post'>
        <img src={data.avatar} alt={data.name} />
        <p>{data.name}</p>
        <div className='btns'>
            <button>Update</button>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default Post