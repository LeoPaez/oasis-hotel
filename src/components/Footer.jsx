import React from 'react';
// logo
import LogoWhite from "../assets/img/logo-white.png"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary">
      <div className="container mx-auto text-white flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <img className="w-[120px]" src={LogoWhite} alt="" />
        </a>
        Copyright &copy; {year} - All right reserverd
      </div>
    </footer>
  )
};

export default Footer;
