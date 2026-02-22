import React, { useContext } from 'react'
import { Link } from 'react-router'
import { recipeContext } from '../context/Context'

const SingleRecipe = ({recipe}) => {


  return (
    <Link to={`/recipe/details/${recipe.id}`} >
        <div className='w-70 rounded-xl bg-gray-900 text-white'>
        <img className='w-70 rounded-t-xl h-45 object-cover' src={recipe.image} alt="" />
        <div className='flex px-3 py-1 pb-5 flex-col  gap-1'>
            <h1 className='text-2xl font-bold'>{recipe.title}</h1>
        <div className='flex justify-between'>
            <h5 className='text-white/50'>{recipe.chef}</h5>
        <h5 className='text-white/50'>{recipe.category}</h5>
        </div>
        <p className='text-sm break-all'>{recipe.description.slice(0,100)}...<small className='text-blue-400'>more</small></p>
        </div>
        </div>
     
    </Link>
  )
}

export default SingleRecipe
