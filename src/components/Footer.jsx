import React from 'react';

const Footer = () => {
  return (
    <div className="bg-pale py-5">
      <div className="container text-center">
        <div>
          Made with <span className="me-2">💙</span> by{' '}
          <a
            className="link-primary"
            href="https://github.com/RAMTO"
            target="_blank"
            rel="noreferrer"
          >
            Martin Dobrev
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
