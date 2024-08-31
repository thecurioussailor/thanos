import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {EyeIcon, EyeOffIcon, Trash2Icon} from 'lucide-react'
const WalletDisplay = ({index, publicKey,privateKey, onDelete}:{index: number,publicKey:string,privateKey:string,onDelete:(index:number) => void}) => {
    
    const [isPrivateKeyVisible, setIsPrivateKeyVisible] = useState(false);
    return (
    <div className='transition-all duration-300 ease-in-out'>
        <Card className='bg-[#051119] border-gray-700 mt-4'>
                <CardHeader>
                    <div className='flex flex-row items-center w-full justify-between text-[#fdfdfd]'>
                        <CardTitle className='text-2xl'>Wallet {index + 1}</CardTitle>
                        <Trash2Icon onClick={() => onDelete(index)} className='hover:text-red-800 cursor-pointer'/>
                    </div>
                </CardHeader>
                <Card className='bg-gray-950 text-[#fdfdfd] border-gray-700 rounded-t-none border-x-0 border-b-0'>
                    <CardHeader>
                        <CardTitle className='text-xl'>Public Key</CardTitle>
                        <p className='text-sm'>{publicKey}</p>
                    </CardHeader>
                    <CardHeader>
                        <CardTitle className='text-xl'>Private Key</CardTitle>
                        <div onClick={() => setIsPrivateKeyVisible(!isPrivateKeyVisible)} className='flex justify-between items-center cursor-pointer'>
                            <p className='text-sm'>{isPrivateKeyVisible ? privateKey : "•••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"}</p>
                            {isPrivateKeyVisible? <EyeOffIcon size={20}/>:<EyeIcon size={20}/>}
                            
                        </div>
                    </CardHeader>
                    
                </Card>
            </Card>
    </div>
  )
}

export default WalletDisplay