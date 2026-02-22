import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Context, { recipeContext } from '../context/Context.jsx'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Create = () => {
    const {handleSubmit , register , reset} = useForm()
    const {data,setData} = useContext(recipeContext)
    const navigate = useNavigate()

    const submitHandler = (recipe) => {

        const newRecipe = {
            ...recipe,
            id : nanoid(),
            ingredients : recipe.ingredients
            .split(',')
            .map(item => item.trim())
            .filter(item => item !== ""),
            
            instructions : recipe.instructions
            .split('|')
            .map(item => item.trim())
            .filter(item => item !== "")
        }


        setData(prev => [...prev,newRecipe])
        toast.success("New Recipe Added")
        reset()
        navigate('/recipe')

    }



  return (
    <div className="absolute flex gap-30 left-0 top-0 py-30 px-25 z-10 w-screen min-h-screen 
             bg-[url('https://i.pinimg.com/1200x/7e/55/d7/7e55d7c5e78e0b4de53081bbbac14cfb.jpg')] 
             bg-cover bg-center">
        <form
  
  onSubmit={handleSubmit(submitHandler)}
>
        <input className='block outline-0 p-2 text-lg border-b-2 w-sm border-white text-white' {...register('title')} type="text" placeholder='Recipe Title'/>

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

        <button className='bg-gray-900 px-10 mt-10 py-2 text-white font-md'>Create</button>

    </form>
    
    <div className='flex'>
        <h1 className='text-9xl text-white/50 font-bold'>Add Your Own Recipe</h1>
    </div>
    </div>
    
  )
}

export default Create
