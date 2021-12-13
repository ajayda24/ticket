import { useState } from 'react'
import { icon } from '../util'

const UilBars = icon('bars')
const UilClose = icon('times')
const UilTrees = icon('trees')
const UilBell = icon('bell')

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
    <div className='relative'>
      <div className='flex items-center justify-between  bg-gray-100 fixed top-0 w-full mb-1 p-2'>
        <div onClick={() => setMenuOpen((p) => !p)}>
          {menuOpen ? (
            <UilClose color='#22577E' size='30' />
          ) : (
            <UilBars color='#22577E' size='30' />
          )}
        </div>
        <div className='flex gap-3 items-center'>
          <UilTrees color='#22577E' size='30' />

          <h1>ABCABC</h1>
        </div>
        <div onClick={() => setNotiOpen((p) => !p)}>
          {notiOpen ? (
            <UilClose color='#22577E' size='30' />
          ) : (
            <UilBell color='#22577E' size='30' />
          )}
        </div>
      </div>
      <Menu menuOpen={menuOpen} menuHandler={setMenuOpen} />
      <Notification notiOpen={notiOpen} notiHandler={setNotiOpen} />
    </div>
  )
}
