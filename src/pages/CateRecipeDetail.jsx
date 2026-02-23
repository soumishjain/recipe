import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { recipeContext } from '../context/Context'

const CateRecipeDetail = () => {

    const [data,setData] = useState(null)

    const {favorites,setFavorites} = useContext(recipeContext)

    const {id} = useParams()

    const render = async () => {
        const newdata = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const meal = newdata.data.meals[0]

        let ing = []

        for(let i=1;i<=20;i++){
           const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
            if(ingredient && ingredient.trim() !== "") 
            ing.push(`${measure ? measure : ""} ${ingredient}`.trim())
        }

        const ins = meal.strInstructions
    .split(/\r?\n|\.\s+/)   // split by newline OR ". "
    .map(item => item.trim())
    .filter(item => item.length > 0)

        meal.instructions = ins
        meal.ingredients = ing 


        setData(meal)
    }

    useEffect(() => {
        render()
    },[id])


    const isFavorite = () => {
            return favorites.some(rec => rec.idMeal === data.idMeal) 
        }
    
    
        const favoriteHandler = (e) => {
            e.preventDefault()
    
            if(isFavorite()) {
                const filtered = favorites.filter(rec => rec.idMeal !== data.idMeal)
                setFavorites(filtered)
                toast.success("Favorite Removed Successfully")
            }     
            else{
                const newList = [...favorites , data]
                setFavorites(newList)
                toast.success("Favorite Added Successfully")
            }  
    
        }



  return data?(
    <div className='flex flex-col gap-10'>
     <div>
         <img className='w-screen object-cover h-[67vh] rounded' src={data.strMealThumb} alt="" />
        
     </div>
     <div className='flex gap-10 flex-col'>
        <div className='relative'>
            <h1 className='text-8xl flex gap-2 items-end text-white/70 font-bold'>{data.strMeal}<p className='text-white/50 text-xl'>({data.strCategory})</p></h1>
            <div className='absolute right-0 top-0'>
                {isFavorite() ? <button onClick={favoriteHandler} className='px-7 py-2 hover:bg-orange-600/80 duration-200 transition-all cursor-pointer bg-orange-600 font-semibold text-white rounded-lg'>Remove From Favorites</button> : <button onClick={favoriteHandler} className='px-7 py-2 hover:bg-green-600/80 duration-200 transition-all bg-green-600 font-semibold text-white rounded-lg'>Add To Favorites</button>}
            </div>
        </div>
                <p className='text-white/10  font-bold border-b-4 mb-10 text-9xl tracking-widest uppercase text-center'>{data.strArea} Cuisine</p>
        <div className='flex flex-col gap-30'>
            <div className='flex gap-10 h-[60vh]'>
            <img className='w-5/8 rounded-4xl h-full object-cover' src={data.strMealThumb} alt="" />
            <div className='flex flex-col gap-5'>
                <h1 className='text-white/50 text-center underline font-bold uppercase text-5xl'>Ingredients</h1>
                <ul className='scrollbar px-15 flex flex-col overflow-y-auto gap-4'>
                    {data.ingredients.map(ing => (<li className='text-white/60 text-2xl' type='disc'>{ing}</li>))}
                </ul>
            </div>
        </div>
        <div className='flex gap-10 h-[60vh]'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-white/50 text-center font-bold uppercase underline text-5xl'>Instructions</h1>
                <ul className='scrollbar px-15 flex flex-col overflow-y-auto gap-4'>
                    {data.instructions.map(ing => (<li className='text-white/60 text-2xl' type='disc'>{ing}</li>))}
                </ul>
            </div>
            <img className='w-5/8 rounded-4xl h-full object-cover' src={data.strMealThumb} alt="" />

        </div>
        </div>
     </div>

    </div>
  ) : (
    <div className='flex h-[80vh] w-[100%] justify-center items-center'>
        <h1 className='text-5xl font-bold text-white/40'>Loading...</h1>
    </div>
  )
}

export default CateRecipeDetail
