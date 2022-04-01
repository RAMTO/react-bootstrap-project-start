import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import { useConnectionStatus } from '../hooks/provider';

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const web3Modal = useConnectionStatus();

  const handleConnectClick = async () => {
    if (web3Modal) {
      try {
        const instance = await web3Modal.connect();
        const web3Provider = new ethers.providers.Web3Provider(instance);
        setIsConnected(true);
        setProvider(web3Provider);

        console.log('provider', provider);
      } catch (e) {
        console.error(`Connection error: ${e.message}`);
      }
    }
  };

  return (
    <div className="bg-pale py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link className="link-primary p-3" to="/">
              Home
            </Link>
            <Link className="link-primary p-3" to="/styleguide">
              Styleguide
            </Link>
          </div>

          <div>
            {!isConnected ? (
              <span onClick={() => handleConnectClick()} className="link-primary">
                Connect
              </span>
            ) : (
              <span>Connected</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
