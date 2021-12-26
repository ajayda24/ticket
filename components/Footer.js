import { useState } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { IoTicket } from 'react-icons/io5'
import { IoTicketOutline } from 'react-icons/io5'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RiAccountPinCircleFill } from 'react-icons/ri'

export default function Footer() {
  const [selectedFooter, setSelectedFooter] = useState('home')
  return (
    <div className='relative'>
      <div className='flex items-center justify-between  bg-gray-300 fixed bottom-0 w-full  p-2 px-5'>
        <div onClick={() => setSelectedFooter('home')}>
          {selectedFooter == 'home' ? (
            <div>
              <AiFillHome color='#22577E' size='30' />
            </div>
          ) : (
            <AiOutlineHome color='#555' size='30' />
          )}
        </div>
        <div onClick={() => setSelectedFooter('raffle')}>
          {selectedFooter == 'raffle' ? (
            <IoTicket color='#22577E' size='30' />
          ) : (
            <IoTicketOutline color='#555' size='30' />
          )}
        </div>
        <div onClick={() => setSelectedFooter('account')}>
          {selectedFooter == 'account' ? (
            <RiAccountPinCircleFill color='#22577E' size='30' />
          ) : (
            <RiAccountPinCircleLine color='#555' size='30' />
          )}
        </div>
      </div>
    </div>
  )
}
