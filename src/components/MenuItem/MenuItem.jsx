import React from 'react'
import './MenuItem.scss'
import {useNavigate} from 'react-router-dom'

const MenuItem = ({size,imageUrl,title,linkUrl}) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={`${size ? size +  ' menu-item' : 'menu-item'} `} onClick={()=> navigate(linkUrl)}>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
          <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
    </>
  )
}

export default MenuItem