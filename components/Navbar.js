import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { FaSnowboarding } from 'react-icons/fa'
import { HiOutlineBell } from 'react-icons/hi'

const Menu = ({ menuOpen = false, menuHandler }) => {
  return (
    <div
      className={`flex min-h-screen mt-11 bg-gray-200 fixed left-0 transition-all ${
        menuOpen ? 'w-full sm:w-1/4' : 'w-0'
      }`}
    ></div>
  )
}

const Notification = ({ notiOpen = false, notiHandler }) => {
  return (
    <div
      className={`flex min-h-screen mt-11 bg-gray-200 fixed right-0 transition-all ${
        notiOpen ? 'w-full sm:w-1/4' : 'w-0'
      }`}
    ></div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notiOpen, setNotiOpen] = useState(false)

  return (
    <div className='relative z-10'>
      <div className='flex items-center justify-between  bg-gray-300 fixed top-0 w-full mb-1 p-2 px-4 '>
        <div onClick={() => setMenuOpen((p) => !p)}>
          {menuOpen ? (
            <IoIosClose color='#22577E' size='30' />
          ) : (
            <FaBars color='#22577E' size='30' />
          )}
        </div>
        <div className='flex gap-3 items-center'>
          <FaSnowboarding color='#22577E' size='30' />

          <h1>ABCABC</h1>
        </div>
        <div onClick={() => setNotiOpen((p) => !p)}>
          {notiOpen ? (
            <IoIosClose color='#22577E' size='30' />
          ) : (
            <HiOutlineBell color='#22577E' size='30' />
          )}
        </div>
      </div>
      <Menu menuOpen={menuOpen} menuHandler={setMenuOpen} />
      <Notification notiOpen={notiOpen} notiHandler={setNotiOpen} />
    </div>
  )
}
