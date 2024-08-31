import React from 'react'

const MnemonicsDisplay = ({mnemonic}: {mnemonic: String}) => {
  const words = mnemonic.split(" ");
  return (
    <div className='flex flex-col w-full items-center justify-center'>
              <div className='grid grid-cols-4 w-full gap-2'>
                {words.map((word)=>(<p key={word} className='p-4 rounded-lg bg-gray-900 text-center hover:bg-gray-800'>{word}</p>))}
              </div>
    </div>
  )
}

export default MnemonicsDisplay