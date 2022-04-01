// import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';

export const useConnectionStatus = () => {
  const [web3Modal, setWeb3Modal] = useState(null);

  useEffect(() => {
    const getWeb3Modal = async () => {
      if (window.ethereum) {
        const providerOptions = {
          /* See Provider Options Section */
        };

        const web3Modal = new Web3Modal({
          network: 'rinkeby', // optional
          cacheProvider: true, // optional
          providerOptions, // required
        });

        setWeb3Modal(web3Modal);
      }
    };

    getWeb3Modal();
  }, []);

  return web3Modal;
};
