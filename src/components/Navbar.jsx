import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className=' font-thin z-50 text-xl flex justify-center gap-x-20 mb-10 w-full absolute top-10 left-0'>
      <NavLink className={({isActive}) => isActive ? "text-red-500" : "text-white"} to='/'>
        Home
      </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-500" : "text-white"} to='/recipe'>
        My Recipes
      </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-500" : "text-white"} to='/about'>
        Favorite
      </NavLink>
      <NavLink className={({isActive}) => isActive ? "text-red-500" : "text-white"} to='/create-recipe'>
        Create Recipe
      </NavLink>
    </div>
  )
}

export default Navbar
