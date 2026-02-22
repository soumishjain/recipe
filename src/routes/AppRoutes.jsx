import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import RecipeDetail from '../pages/RecipeDetail'
import Update from '../pages/Update'
import RecipeCategory from '../pages/RecipeCategory'
import CateRecipeDetail from '../pages/CateRecipeDetail'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/recipe' element={<Recipe />}/>
        <Route path='/recipe/details/:id' element={<RecipeDetail />}/>
        <Route path='/recipe/:category' element={<RecipeCategory />}/>
        <Route path='/recipe/cate-details/:id' element={<CateRecipeDetail />}/>
        <Route path='/favorite' element={<About />}/>

        <Route path='/create-recipe' element={<Create />}/>
        <Route path='/update-recipe/:id' element={<Update />}/>

    </Routes>
  )
}

export default AppRoutes
