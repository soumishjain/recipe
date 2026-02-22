import React, { useContext } from 'react'
import { recipeContext } from '../context/Context'
import SingleRecipe from '../components/SingleRecipe'

const Recipe = () => {

    const {data} = useContext(recipeContext)

    const renderRecipe = data.map(recipe => (
            <SingleRecipe key={recipe.id} recipe={recipe}/>
    ))


  return data.length > 0 ? (
    <div className='flex gap-5 flex-wrap'>
      {renderRecipe}
    </div>
  ) : (
    <div className='flex h-[80vh] w-[100%] justify-center items-center'>
        <h1 className='text-5xl font-bold text-white/40'>Sorryy No data to show</h1>
    </div>
  )
}

export default Recipe
