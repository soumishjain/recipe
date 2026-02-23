import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { recipeContext } from '../context/Context'
import { Heart, HeartIcon } from 'lucide-react'
import { toast } from 'react-toastify'

const SingleRecipe = ({recipe}) => {

    const {favorites,setFavorites} = useContext(recipeContext)

  const favoriteHandler = (e) => {
    e.preventDefault()
    const isAlreadyFavorite = favorites.some(rec => rec.id === recipe.id)

    if(isAlreadyFavorite){
      const filter = favorites.filter(rec => rec.id !== recipe.id)
      setFavorites(filter)
      toast.success("Favorite removed Successfully")
    }else{
      const newFavorites = [...favorites , recipe]
      setFavorites(newFavorites)
      toast.success("Favorite Added Successfully")
    }
  }

  useEffect(() => {
    console.log(favorites)
  },[favorites])

  return (
    <Link to={`/recipe/details/${recipe.id}`} >
        <div className='w-70 rounded-xl bg-gray-900 text-white'>
        <img className='w-70 rounded-t-xl h-45 object-cover' src={recipe.image} alt="" />
        <div className='flex px-3 py-1 pb-5 flex-col  gap-1'>
            <div className='flex justify-between'>
              <h1 className='text-2xl font-bold'>{recipe.title}</h1>
              {favorites.find(rec => rec.id === recipe.id) ? <Heart onClick={favoriteHandler} fill='currentColor' className={`text-red-500`}/> : <HeartIcon onClick={favoriteHandler} className={``}/>}
            </div>
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
