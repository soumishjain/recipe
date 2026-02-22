import { nanoid } from 'nanoid'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Context, { recipeContext } from '../context/Context.jsx'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router'

const Update = () => {

    const {id} = useParams()

    const {handleSubmit , register , reset} = useForm()

        const {data,setData} = useContext(recipeContext)
        const navigate = useNavigate()
    
        const submitHandler = (recipe) => {

            const ingredientsArray = Array.isArray(recipe.ingredients) ? recipe.ingredients : recipe.ingredients
                        .split(',')
                        .map(item => item.trim())
                        .filter(item => item !== "")

             const instructionsArray = Array.isArray(recipe.instructions) ? recipe.instructions : recipe.instructions
                        .split(',')
                        .map(item => item.trim())
                        .filter(item => item !== "")

            const newRecipe = {
                        ...recipe,
                        id,
                        ingredients : ingredientsArray, 
                        
                        instructions : instructionsArray
                    }

                    const newData = data.map(rec => rec.id === id ? newRecipe : rec )

           setData(newData)
            toast.success("Recipe Updated")
            navigate(`/recipe/details/${id}`)
    
        }

        function setCurRecipe(){
            const found = data.find(rec => rec.id === id)
            reset(found)
        }

        useEffect(() => {
            setCurRecipe()
        },[id,data])


  return (
    <div className="absolute flex gap-30 left-0 top-0 py-30 px-25 z-10 w-screen min-h-screen 
             bg-[url('https://i.pinimg.com/1200x/7e/55/d7/7e55d7c5e78e0b4de53081bbbac14cfb.jpg')] 
             bg-cover bg-center">
        <form
  
  onSubmit={handleSubmit(submitHandler)}
>
        <input className='block outline-0 p-2 text-lg border-b-2 w-sm border-white text-white' {...register('title')} type="text" placeholder='Recipe Title'/>
        <small className='text-red-500'>This is how the error will be shown</small>

        <input className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('image')} type="url" placeholder='Enter cover Image Url'/>

         <input className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('tempimage1')} type="url" placeholder='Enter primary Image Url'/>

          <input className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('tempimage2')} type="url" placeholder='Enter secondary Image Url'/>

        <input className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('chef')} type="text" placeholder='Enter Chef Name'/>

        <select className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('category')} >
            <option className='text-black' value="Indian">Indian</option>
            <option className='text-black' value="Italian">Italian</option>
            <option className='text-black' value="Mexican">Mexican</option>
        </select>

        <textarea className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('description')} placeholder='Enter Description'/>

        <textarea className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('ingredients')} placeholder='Enter Ingredients (separated by comma)'/>

        <textarea className='block outline-0 mt-3 p-2 text-lg w-sm border-b-2 border-white text-white' {...register('instructions')} placeholder='Enter Instructions (separated by |)'/>

        <button className='bg-gray-900 px-10 mt-10 py-2 text-white font-md'>Update</button>

    </form>
    
    <div className='flex'>
        <h1 className='text-9xl text-white/50 font-bold'>Add Your Own Recipe</h1>
    </div>
    </div>
  )
}

export default Update
