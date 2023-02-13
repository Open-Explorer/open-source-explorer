import React from 'react'
import { FaRegStar } from 'react-icons/fa'
import './Explore.scss'

export default function RepositoryCard({
  name,
  language,
  url,
  star_count,
  visibility,
}) {
  return (
    <div className='box'>
      <div className='cal'>
        <a href={url} className='calculator' target='blank'>
          {name}
        </a>
        <small>{visibility}</small>
      </div>
      <div className='jav'>
        <p>{language}</p>
        <i>
          <FaRegStar />
        </i>
        <p className='starCount'>{star_count}</p>
      </div>
    </div>
  )
}
