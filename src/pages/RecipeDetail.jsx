import React, { useContext, useEffect, useState } from 'react'
import { recipeContext } from '../context/Context'
import { Link, useNavigate, useParams } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const RecipeDetail = () => {

    const {data , setData} = useContext(recipeContext)
    const {id} = useParams()
    const navigate = useNavigate()

    const [recipe,setRecipe] = useState(null)

    function setCurRecipe(){
        const found = data.find(rec => rec.id === id)
        setRecipe(found);
        console.log(recipe)
    }


    useEffect(() => {

        if(data.length > 0){
            setCurRecipe()
        }
    },[data,id])


    if(!recipe) return <h1 className='text-white'>Loading...</h1>

    function deleteHandler(){
        const filterData = data.filter(rec => rec.id !== id)
        setData(filterData)
        navigate('/recipe')
    }

  return (
    <div className='flex flex-col gap-10'>
     <div>
         <img className='w-screen object-cover h-[67vh] rounded' src={recipe.image} alt="" />
        
     </div>
     <div className='flex gap-10 flex-col'>
        <div className='relative'>
            <h1 className='text-8xl flex gap-2 items-end text-white/70 font-bold'>{recipe.title}<p className='text-white/50 text-xl'>({recipe.chef})</p></h1>
            <div className='absolute right-0 top-0 flex gap-3'>
             <button onClick={deleteHandler} className='px-7 py-2 hover:bg-red-600/80 duration-200 transition-all bg-red-600 font-semibold text-white rounded-lg'>Delete</button>
         <Link to={`/update-recipe/${id}`} className='px-7 py-2 hover:bg-blue-600/80 duration-200 transition-all bg-blue-600 font-semibold text-white rounded-lg'>Update</Link>
        </div>
        </div>
        
        <p className='text-white/40 text-lg'>{recipe.description}</p>
        <p className='text-white/10  font-bold border-b-4 mb-10 text-9xl tracking-widest uppercase text-center'>{recipe.category} Cuisine</p>
        <div className='flex flex-col gap-30'>
            <div className='flex gap-10 h-[60vh]'>
            <img className='w-5/8 rounded-4xl h-full object-cover' src={recipe.tempimage1} alt="" />
            <div className='flex flex-col gap-5'>
                <h1 className='text-white/50 text-center underline font-bold uppercase text-5xl'>Ingredients</h1>
                <ul className='scrollbar px-15 flex flex-col overflow-y-auto gap-4'>
                    {recipe.ingredients.map(ing => (<li className='text-white/60 text-2xl' type='disc'>{ing}</li>))}
                </ul>
            </div>
        </div>
        <div className='flex gap-10 h-[60vh]'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-white/50 text-center font-bold uppercase underline text-5xl'>Instructions</h1>
                <ul className='scrollbar px-15 flex flex-col overflow-y-auto gap-4'>
                    {recipe.instructions.map(ing => (<li className='text-white/60 text-2xl' type='disc'>{ing}</li>))}
                </ul>
            </div>
            <img className='w-5/8 rounded-4xl h-full object-cover' src={recipe.tempimage2} alt="" />

        </div>
        </div>
     </div>

    </div>
  )
}

export default RecipeDetail
