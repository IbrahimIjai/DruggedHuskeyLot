
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function Header() {
  return (
    <div className='w-full px-6 py-3 border-b fixed top-0 inset-x-0 shadow-lg'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold '>DOGE</p>
        <ConnectButton/>
      </div>
    </div>
  )
}
