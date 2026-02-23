import { HeartIcon } from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router'
import { recipeContext } from '../context/Context'
import { toast } from 'react-toastify'

const CategoryPageCard = ({recipe}) => {

  const {favorites,setFavorites} = useContext(recipeContext)
  
    const favoriteHandler = (e) => {
      e.preventDefault()
      const isAlreadyFavorite = favorites.some(rec => rec.idMeal === recipe.idMeal)
  
      if(isAlreadyFavorite){
        const filter = favorites.filter(rec => rec.idMeal !== recipe.idMeal)
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
    <Link to={`/recipe/cate-details/${recipe.idMeal}`} >
    <div className="w-70  h-40 bg-cover relative bg-center rounded-xl"  style={{ backgroundImage: `url(${recipe.strMealThumb})` }}>
      {favorites.some(rec => rec.idMeal === recipe.idMeal)? <HeartIcon color='red' className='text-red-500 absolute right-2 top-2' fill='currentColor' onClick={favoriteHandler}/> : <HeartIcon color='white' className='absolute right-2 top-2' onClick={favoriteHandler}/>}
        <div className='bg-black/50 rounded-xl w-full h-full flex justify-center items-center'  >
      
            <h1 className='text-2xl text-white text-center font-bold'>{recipe.strMeal}</h1>
            </div>
    </div>
     
    </Link>

  )
}

export default CategoryPageCard
