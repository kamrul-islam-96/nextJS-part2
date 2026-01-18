import ReviewCardSkeleton from '@/components/skeletons/ReviewCardSkeleton'
import React from 'react'

export default function ReviewsLoading() {
  return (
    <div className='container grid grid-cols-4 gap-5 mx-auto my-6'>
        {
            [...Array(10)].map((_, index) => <ReviewCardSkeleton key={index} />)
        }
    </div>
  )
}
