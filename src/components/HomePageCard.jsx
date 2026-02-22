import React from 'react'
import { Link } from 'react-router'

const HomePageCard = ({recipe}) => {
  return (
   <Link to={`/recipe/${recipe.strCategory}`} >
        <div className='w-70 rounded-xl bg-gray-900 text-white'>
        <img className='w-70 rounded-t-xl h-45 object-cover' src={recipe.strCategoryThumb} alt="" />
        <div className='flex px-3 py-1 pb-5 flex-col  gap-1'>
            <h1 className='text-2xl font-bold'>{recipe.strCategory}</h1>
        <p className='text-sm break-all'>{recipe.strCategoryDescription.slice(0,100)}...<small className='text-blue-400'>more</small></p>
        </div>
        </div>
     
    </Link>
  )
}

export default HomePageCard
