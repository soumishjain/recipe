import React, { createContext, useEffect, useState } from 'react'

export const recipeContext = createContext(null)

const Context = ({children}) => {
    const [data,setData] = useState(() => {
        const stored = localStorage.getItem("recipes");
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem('recipes',JSON.stringify(data))
    },[data])

  return (
      <recipeContext.Provider value={{data,setData}}>
        {children}
      </recipeContext.Provider>
  )
}

export default Context