import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import categories from './categories.json'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Categories