import React, { useState } from 'react'
import Wallet from './Wallet'
import Mnemonics from './Mnemonics';
import Footer from './Footer';
const Hero = () => {
  return (
    <div className='text-[#fdfdfd]'>
        <Mnemonics/>
        <section className='mb-16'>
            <div>
                <Wallet/>
            </div>
        </section>
        <section className='mt-8'>
            <Footer/>
        </section>
    </div>
  )
}

export default Hero