import React from 'react'
import { Link } from 'react-router'

const CategoryPageCard = ({recipe}) => {
  return (
    <Link to={`/recipe/cate-details/${recipe.idMeal}`} >
    <div className="w-70  h-40 bg-cover bg-center rounded-xl"  style={{ backgroundImage: `url(${recipe.strMealThumb})` }}>
        <div className='bg-black/50 rounded-xl w-full h-full flex justify-center items-center'  >
      
            <h1 className='text-2xl text-white text-center font-bold'>{recipe.strMeal}</h1>
            </div>
    </div>
     
    </Link>

  )
}

export default CategoryPageCard
