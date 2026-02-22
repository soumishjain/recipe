import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomePageCard from '../components/HomePageCard';

const Home = () => {

    const[homedata,setHomedata] = useState([]);

    async function render(){
        const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        setHomedata(data.data.categories)
    }

    useEffect(() => {
        render()
    },[])


  return homedata.length > 0 ? (
    <div className='flex flex-wrap gap-5'>
      {homedata.map(recipe => <HomePageCard key={recipe.idCategory
      } recipe={recipe}/>)}
    </div>
  ) : (
    <div className='flex h-[80vh] w-[100%] justify-center items-center'>
        <h1 className='text-5xl font-bold text-white/40'>Loading...</h1>
    </div>
  )
}

export default Home