
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
export default function Header() {
  return (
    <div className='fixed inset-x-0 top-0 w-full px-6 py-3 border-b shadow-lg'>
      <div className='flex items-center justify-between'>
        <p className='text-xl font-semibold '>DOGE</p>
        <ConnectButton showBalance={false}/>
      </div>
    </div>
  )
}
