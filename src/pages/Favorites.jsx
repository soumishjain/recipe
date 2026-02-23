import React, { useContext } from 'react'
import { recipeContext } from '../context/Context'
import { Link } from 'react-router'
import { Heart, HeartIcon } from 'lucide-react'
import favimg from "../assets/fav.png"

const Favorites = () => {

  const {favorites,setFavorites,data} = useContext(recipeContext)

  const favoriteHandler = (e,recipe) => {
    e.preventDefault()
    
     const filtered = favorites.filter(rec => {
      if(recipe.id){
        return rec.id !== recipe.id
      }

      if(recipe.idMeal){
        return rec.idMeal !== recipe.idMeal
      }
      return true
     })

     setFavorites(filtered)
  }


  const renderFavorites = () => {
    return favorites.map(recipe => (
      <div>
      {data.some(item => item.id === recipe.id) ? <Link to={`/recipe/details/${recipe.id}`} >
    <div className="w-70  h-40 bg-cover bg-center relative rounded-xl"  style={{ backgroundImage: `url(${recipe.image})` }}>
     <Heart onClick={(e) => favoriteHandler(e,recipe)} fill='currentColor' className={`text-red-500 absolute top-1 right-1 z-50`}/>
        <div className='bg-black/50 rounded-xl w-full h-full flex justify-center items-center'  >
      
            <h1 className='text-2xl text-white text-center font-bold'>{recipe.title}</h1>
            </div>
    </div>
     
    </Link> : <Link to={`/recipe/cate-details/${recipe.idMeal}`} >
    <div className="w-70  h-40 relative bg-cover bg-center rounded-xl"  style={{ backgroundImage: `url(${recipe.strMealThumb})` }}>
       <Heart onClick={(e) => favoriteHandler(e,recipe)} fill='currentColor' className={`text-red-500 absolute top-1 right-1 z-50`}/>
        <div className='bg-black/50 rounded-xl w-full h-full flex justify-center items-center'  >
      
            <h1 className='text-2xl text-white text-center font-bold'>{recipe.strMeal}</h1>
            </div>
    </div>
     
    </Link>}
    </div>

    ))
  }

  return favorites.length > 0 ? (
    <div className='flex flex-wrap gap-5'>
      {renderFavorites()}
    </div>
  ) : (
    <div className='relative'>
      <h1 className='text-6xl absolute top-20 left-70 font-bold text-white/50'>Add Something to Favorites</h1>
      <img className='h-70 w-70 top-50 left-130 absolute' src={favimg} alt="" />
    </div>
  )
}

export default Favorites


