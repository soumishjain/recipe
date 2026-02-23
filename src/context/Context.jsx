import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null)

const Context = ({children}) => {
    const [data,setData] = useState(() => {
        const stored = localStorage.getItem("recipes");
        return stored ? JSON.parse(stored) : []
    })

    const [favorites,setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('recipes',JSON.stringify(data))
    },[data])

    useEffect(() => {
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

  return (
      <recipeContext.Provider value={{data,setData,favorites,setFavorites}}>
        {children}
      </recipeContext.Provider>
  )
}

export default Context