
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function Header() {
  return (
    <div className='w-full px-6 py-3 border-b'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold '>DruggedHusk.. Lottery</p>
        <ConnectButton/>
      </div>
    </div>
  )
}
