import React from 'react'
import { Switch } from './ui/switch'
import Image from 'next/image'
import Logo from '../public/logo-thonos2.png'
import { FaGithub } from 'react-icons/fa'
import { RxAvatar } from 'react-icons/rx'
const Navbar = () => {
  return (
    <div className='flex justify-center text-[#fdfdfd] h-[64px]'>
        <div className='flex flex-row justify-between items-center px-4 w-full'>
            <div>
                <h1 className='text-3xl flex items-center'>
                    <Image 
                        src={Logo}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    Thanos
                </h1>
            </div>
            <div className='text-white flex justify-center items-center'>
              <div className='mr-4 flex'>
                    <Switch className='bg-white'/>
              </div>
              <div className='flex mr-2'>
                <a href=''><FaGithub className='mr-2' size={20}/></a>
                <RxAvatar size={22}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar