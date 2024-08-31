"use client"
import React, { useState } from 'react'
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"
import { Buffer } from 'buffer';
// import { Wallet, HDNodeWallet } from "ethers";

import { Button } from './ui/button'
import { toast } from 'sonner';
import { mnemonicToSeedSync } from '@scure/bip39';
import WalletDisplay from './WalletDisplay';
interface Wallet {
    index: number;
    publicKey: string;
    privateKey: string;
}
const Wallet = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState<string[]>([]);
    const [wallets, setWallets] = useState<Wallet[]>([]);
    const addSolanaWallet = () => {
        const mnemonic = localStorage.getItem("mnemonic")
        if (!mnemonic) {
            toast.error("Mnemonic not found.");
            return;
        }
        const seed = mnemonicToSeedSync(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, Buffer.from(seed).toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);

        const newWallet = {
            index: currentIndex,
            publicKey: keypair.publicKey.toString(),
            privateKey: Buffer.from(secret).toString("hex")
        };
    
        const updatedWallets = [...wallets, newWallet];
        setWallets(updatedWallets);
        localStorage.setItem("wallets", JSON.stringify(updatedWallets));
        setCurrentIndex(currentIndex + 1);

    }

    const clearWallets = () => {
        setCurrentIndex(0);
        setPublicKeys([]);
        setWallets([]);
        toast.info("Wallets cleared.");
    };
    const deleteWallet = (index: number) => {
        setWallets(prevWallets => prevWallets.filter(wallet => wallet.index !== index));
        setCurrentIndex(currentIndex-1)
        toast.info(`Wallet at index ${index} deleted.`);
    };
     return (
       <div>
            <div className='flex justify-between p-8'>
                <h1 className='text-3xl font-extrabold'>Solana Wallet</h1>
                <div>
                <Button className='mr-4' variant={"secondary"} onClick={addSolanaWallet}>
                        Add Wallet
                    </Button>
                    <Button variant={"destructive"} onClick={clearWallets}>
                        Clear Wallet
                    </Button>
                </div>
            </div>
            <div>

            </div>
            <div> 
                {
                currentIndex > 0 ? (
                    wallets.map(wallet =>(
                    <WalletDisplay 
                        key={wallet.index}
                        index={wallet.index} 
                        publicKey={wallet.publicKey} 
                        privateKey={wallet.privateKey}
                        onDelete={deleteWallet}/>)))
                
            : null}
            </div>
       </div>
     )
   }
   
   export default Wallet