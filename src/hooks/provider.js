import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import Web3Modal from 'web3modal';

export const useConnectionStatus = (setIsConnected, setProvider) => {
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

        // Check for connected
        if (localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER') === '"injected"') {
          const instance = await web3Modal.connect();
          const web3Provider = new ethers.providers.Web3Provider(instance);
          setIsConnected(true);
          setProvider(web3Provider);
        }

        setWeb3Modal(web3Modal);
      }
    };

    getWeb3Modal();
  }, [setIsConnected, setProvider]);

  return web3Modal;
};
