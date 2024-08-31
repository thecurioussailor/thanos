"use client"
// import { mnemonicGenerate } from '@polkadot/util-crypto';
// import { generateMnemonic } from 'bip39';
import { FileDownIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import * as bip39 from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import MnemonicsDisplay from './MnemonicsDisplay';
import { toast } from "sonner"

const Mnemonics = () => {
  const [mnemonic, setMnemonic] = useState("");
  useEffect(()=> {
    const handleOnclick = async () => {
      const mn = bip39.generateMnemonic(wordlist);
            setMnemonic(mn);
            localStorage.setItem("mnemonic",mn);
    }
    handleOnclick();
  },[])

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard!");
  };
  return (
    <div className='flex flex-col mt-10 justify-center items-center gap-4 cursor-pointer p-8 border hover:border-blue-900 shadow-blue-700 hover:shadow-inner border-gray-700 rounded-lg'>
      <div className='flex justify-between w-full'>
          <h2 className='text-lg'>Your Secret Phrase</h2>
          <button onClick={() => copyToClipboard(mnemonic)}><FileDownIcon/></button>
      </div>
      <div>
      </div>
      <div className='w-full'>
        <MnemonicsDisplay mnemonic={mnemonic}/>
      </div>
    </div>
    
  )
}

export default Mnemonics