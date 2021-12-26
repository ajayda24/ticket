import React from 'react'

export default function CreateYour() {
  return (
    <div className='flex flex-col md:flex-row min-h-[20rem] glass p-4 m-4 rounded-md items-center justify-center'>
      <center>
        <img src='../images/create.svg' alt='' width='300px' />
      </center>
      <div className='flex flex-col gap-3 justify-center sm:w-1/2 mx-auto'>
        <h1 className='mx-auto mt-5 font-bold'>Create your ABCABC</h1>
        <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          consequatur!
        </h3>
        <button className='bg-[#22577E] text-white p-2 rounded-md'>
          Create
        </button>
      </div>
    </div>
  )
}
