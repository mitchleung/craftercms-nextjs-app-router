import React from 'react'
import { useRouter } from 'next/router'

const WildCardPage = () => {
  const router = useRouter()

  return (
    <div>
      <p>Post: {router.query.slug}</p>
      
    </div>
  )
}

export default WildCardPage