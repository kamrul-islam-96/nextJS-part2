import { FoodCard } from '@/components/card/FoodCard'
import React from 'react'

const getFoods = async () => {
    const res = await fetch('https://taxi-kitchen-api.vercel.app/api/v1/foods/random')
    const data = await res.json();
    new Promise((resolve) => setTimeout(resolve, 2000)); 
    return data.foods || []
}


export default async function FoodPage() {
    const foods = await getFoods()
  return (
    <div>
        <h2 className='text-3xl text-center font-bold'>Total <span className='text-yellow-600'>{foods.length}</span> Foods Founds</h2>
        <div className='container grid grid-cols-4 gap-5 mx-auto my-6'>
            {foods.map((food) => (
                <FoodCard food={food} key={food.id} />
            ))}
        </div>
    </div>
  )
}



