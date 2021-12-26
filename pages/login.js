import React, { useRef, useState } from 'react'
import axios from '../axios'
import { useRouter } from 'next/router'
import { IconContext } from 'react-icons'
import { FaRegUser } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { BiUserPin } from 'react-icons/bi'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { ImSpinner2 } from 'react-icons/im'

import { useSelector, useDispatch } from 'react-redux'
import { logIn } from '../store/authSlice'
import { errorActions } from '../store/errorSlice'
import Error from '../components/Error'

export default function Login() {
  const dispatch = useDispatch()
  const router = useRouter()
  const authState = useSelector((state) => state.auth.isLoggedIn)
  const error = useSelector((state) => state.error.currentError)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [isLoginScreen, setIsLoginScreen] = useState(false)
  const fullName = useRef('')
  const email = useRef('')
  const password = useRef('')
  const [isLoading, setIsLoading] = useState(false)

  const continueLoginHandler = async () => {
    setIsLoading(true)
    let f, e, p
    if (!isLoginScreen) {
      f = fullName.current.value
      if (f == '') {
        setIsLoading(false)
        dispatch(errorActions.newError('Please type your name.'))
      }
    }
    e = email.current.value
    p = password.current.value
    if (e == '' || p == '') {
      setIsLoading(false)
      return dispatch(
        errorActions.newError('Please provide valid email and password...')
      )
    }

    let response

    try {
      response = await axios.post(
        `${!isLoginScreen ? '/group/register' : '/group/login'}`,
        {
          fullName: f,
          email: e,
          password: p,
        }
      )
    } catch (err) {
      setIsLoading(false)
      console.log(err.response)
      return dispatch(errorActions.newError(err.response.data.message))
    }
    if (!response.data.status) {
      setIsLoading(false)
      return dispatch(
        errorActions.newError('Something went wrong! Please try again later.')
      )
    }
    dispatch(logIn())
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: response.data.data.userId,
        token: response.data.data.token,
      })
    )
    router.push('dashboard/')
  }
  return (
    <div className='relative flex'>
      <div className='flex flex-1 items-center justify-center min-h-screen'>
        <div className='flex flex-col glass p-2 rounded-sm shadow-lg w-80 sm:w-2/6 min-h-[25rem] justify-between'>
          <div className='flex mb-5 gap-5 justify-center rounded-sm p-1 border-b-2 border-[#22577E]'>
            <h1
              className={`mx-auto text-lg transition-all py-3 flex-1 text-center cursor-pointer rounded-sm ${
                !isLoginScreen
                  ? 'bg-gray-100/20 shadow-bottom'
                  : 'hover:bg-gray-100/10'
              } hover:bg-gray-100/20`}
              onClick={() => setIsLoginScreen(false)}
            >
              Sign Up
            </h1>
            <h1
              className={`mx-auto text-lg transition-all py-3 flex-1 text-center cursor-pointer rounded-md ${
                isLoginScreen
                  ? 'bg-gray-100/20 shadow-bottom'
                  : 'hover:bg-gray-100/10'
              } `}
              onClick={() => setIsLoginScreen(true)}
            >
              Sign In
            </h1>
          </div>
          <div className='flex gap-8 p-2 py-5 flex-col justify-center'>
            {!isLoginScreen && (
              <div className='flex gap-3 items-center'>
                <FaRegUser className='text-xl text-gray-900' />
                <input
                  type='fullname'
                  name='fullname'
                  id=''
                  placeholder='Enter your fullname'
                  className='flex-1 outline-none p-1 py-2 bg-transparent border-gray-500 focus:border-gray-900  border-b-2 placeholder-gray-900 transition-all'
                  autoComplete='off'
                  required
                  ref={fullName}
                />
              </div>
            )}
            <div className='flex gap-3 items-center'>
              <BiUserPin className='text-xl text-gray-900' />
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                className='flex-1 outline-none p-1 py-2 bg-transparent border-gray-500 focus:border-gray-900 border-b-2  placeholder-gray-900 transition-all'
                autoComplete='off'
                ref={email}
                required
              />
            </div>
            <div className='flex gap-3 items-center'>
              <FiLock className='text-xl text-gray-900' />
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                className='flex-1 outline-none p-1 py-2 bg-transparent border-gray-500 focus:border-gray-900 border-b-2  placeholder-gray-900 transition-all'
                autoComplete='off'
                ref={password}
                required
              />
            </div>
          </div>
          <button
            className='btn-primary '
            type='button'
            onClick={continueLoginHandler}
          >
            <p>Continue</p>
            {!isLoading ? (
              <BsBoxArrowInRight className='text-xl' />
            ) : (
              <IconContext.Provider
                value={{ className: 'text-xl animate-spin' }}
              >
                <ImSpinner2 />
              </IconContext.Provider>
            )}
          </button>
        </div>
      </div>
      {error && <Error />}
    </div>
  )
}
