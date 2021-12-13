import { useState } from 'react'
import { icon, solidIcon } from './Navbar'

const HomeIcon = icon('estate')
const HomeIconSolid = solidIcon('estate')
const RaffleIcon = icon('ticket')
const UilBell = icon('bell')

export default function Footer() {
  const [homeSelect, setHomeSelect] = useState(false)
  const [myRaffleSelect, setMyRaffleSelect] = useState(false)
  const [accountSelect, setAccountSelect] = useState(false)
  return (
    <div className='relative'>
      <div className='flex items-center justify-between  bg-gray-100 fixed bottom-0 w-full mb-1 p-2'>
        <div onClick={() => setHomeSelect((p) => !p)}>
          {homeSelect ? (
            <HomeIconSolid color='#22577E' size='30' />
          ) : (
            <HomeIcon color='#22577E' size='30' />
          )}
        </div>
        <div onClick={() => setMyRaffleSelect((p) => !p)}>
          {myRaffleSelect ? (
            <UilClose color='#22577E' size='30' />
          ) : (
            <RaffleIcon color='#22577E' size='30' />
          )}
        </div>
        <div onClick={() => setAccountSelect((p) => !p)}>
          {accountSelect ? (
            <UilClose color='#22577E' size='30' />
          ) : (
            <UilBell color='#22577E' size='30' />
          )}
        </div>
      </div>
    </div>
  )
}
