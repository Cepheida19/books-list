import { useState, useEffect } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

export const WalletConnect = () => {
    // const [address, setAddress] = useState<string | null>(null);
    // const [balance, setBalance] = useState<string | null>(null);
    // const [provider, setProvider] = useState<providers.ExternalProvider | null>(null);
    // const [walletConnected, setWalletConnected] = useState(false);
  
    // useEffect(() => {
    //   if (walletConnected && provider) {
    //     const getBalance = async () => {
            
    //       if (provider && address) {
    //         const ethersProvider = new ethers.providers.Web3Provider(provider);
    //         const balance = await ethersProvider.getBalance(address);
    //         setBalance(ethers.utils.formatEther(balance));
    //       }
    //     };
  
    //     getBalance();
    //   }
    // }, [walletConnected, provider, address]);
  
    // const connectWallet = async () => {
    //   const connector = new WalletConnectProvider({
    //     qrcodeModal: QRCodeModal,
    //   });
  
    //   await connector.enable();
    //   setProvider(connector);
  
    //   const ethersProvider = new ethers.providers.Web3Provider(connector as providers.ExternalProvider);
    //   const signer = ethersProvider.getSigner();
    //   const userAddress = await signer.getAddress();
    //   setAddress(userAddress);
    //   setWalletConnected(true);
    // };
  
    return (
      <div>
        <div>about wallet</div>
        {/* <button onClick={connectWallet}>
          Connect Wallet
        </button>
        {address && (
          <div>
            <div>Address: {address}</div>
            <div>Balance: {balance} ETH</div>
          </div>
        )} */}
      </div>
    );
  };