import { FoodCardSkeleton } from '@/components/skeletons/FoodCardSkeleton'
import React from 'react'

export default function loading() {
  return (
    <div className='container grid grid-cols-4 gap-5 mx-auto my-6'>
        {
            [...Array(8)].map((_, index) => <FoodCardSkeleton key={index} />)
        }
    </div>
  )
}
