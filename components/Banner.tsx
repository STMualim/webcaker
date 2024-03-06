import React from 'react'
import Image from 'next/image'

import banner from '@/assets/banner.webp'

export default function Banner() {
  return (
    <div className='bg-gray-300 rounded-md h-48 mb-2 lg:h-[500px] overflow-hidden shadow'>
      <Image priority src={banner} alt='banner' className='h-full w-full' />
    </div>
  )
}
