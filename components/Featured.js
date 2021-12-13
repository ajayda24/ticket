import React from 'react'

export default function Featured() {
  return (
    <div className='pt-16 px-3'>
      <div className='flex flex-col'>
        <h1 className='mb-3'>Featured ABCABC</h1>
        <div className='flex gap-3 overflow-x-scroll p-1'>
          <div className='flex flex-shrink-0 bg-gray-200 shadow-xl ring-primary ring-1 h-36 w-52 '></div>
          <div className='flex flex-shrink-0 bg-gray-200 shadow-xl ring-primary ring-1 h-36 w-52'></div>
          <div className='flex flex-shrink-0 bg-gray-200 shadow-xl ring-primary ring-1 h-36 w-52'></div>
          <div className='flex flex-shrink-0 bg-gray-200 shadow-xl ring-primary ring-1 h-36 w-52'></div>
          <div className='flex flex-shrink-0 bg-gray-200 shadow-xl ring-primary ring-1 h-36 w-52'></div>
        </div>
      </div>
    </div>
  )
}
