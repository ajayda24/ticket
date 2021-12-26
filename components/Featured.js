import React from 'react'

function Fea() {
  return (
    <div className='flex flex-shrink-0 shadow-xl ring-primary ring-1 h-36 w-52 sm:w-80 sm:h-48 rounded-sm glass '></div>
  )
}

export default function Featured() {
  return (
    <div className='pt-16 px-3'>
      <div className='flex flex-col'>
        <h1 className='mb-3 text-white mx-auto'>Featured ABCABC</h1>
        <div className='flex gap-3 overflow-x-scroll p-1 scrollbar'>
          <Fea />
          <Fea />
          <Fea />
          <Fea />
          <Fea />
        </div>
      </div>
    </div>
  )
}
