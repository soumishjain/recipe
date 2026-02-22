import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import CategoryPageCard from '../components/CategoryPageCard'

const RecipeCategory = () => {


    const [data,setData] = useState([])

    const {category} = useParams()


    const render = async () => {
        const newData = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)

        setData(newData.data.meals)
        

    }

    useEffect(() => {
        render()
    },[category])

  return data && data.length > 0 ? (
    <div className='flex flex-wrap gap-5'>
       {data.map(recipe => <CategoryPageCard key={recipe.idMeal
      } recipe={recipe}/>)}
    </div>
  ) : (
     <div className='flex h-[80vh] w-[100%] justify-center items-center'>
        <h1 className='text-5xl font-bold text-white/40'>Loading...</h1>
    </div>
  )
}

export default RecipeCategory
