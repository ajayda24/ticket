import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { VscError } from 'react-icons/vsc'
import { errorActions } from '../store/errorSlice'

export default function Error() {
  const error = useSelector((state) => state.error.currentError)
  const dispatch = useDispatch()

  const errorCloseHandler = () => {
    dispatch(errorActions.closeError())
  }
  return (
    <div className='min-w-full min-h-screen bg-gray-800/60 absolute'>
      <div className='flex flex-col gap-4 justify-between items-center w-60 h-80 bg-red-400 text-white text-center p-5 absolute-center top-1/2 left-1/2'>
        <VscError className='text-6xl' />
        <p className='text-lg'>{error}</p>
        <button className='btn-primary' onClick={errorCloseHandler}>
          Ok
        </button>
      </div>
    </div>
  )
}
