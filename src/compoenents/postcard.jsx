import React from 'react'
import dataService from '../appwrite/dataService'
import {Link} from "react-router-dom"

function postcard({$id,title,article ,featuredImage}) {
  return (
   <div className='w-full rounded-xl p-3'>
     <div className='w-full justify-center'>
      <img src={dataService.previewFile(featuredImage)} />
      <h1>{title}</h1><br/>
      <p>{article}</p><br/>
      <Link to={`/posts/${$id}`}>View</Link>
    </div>
   </div>
  )
}

export default postcard
