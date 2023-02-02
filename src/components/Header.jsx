import React, { useEffect, useState } from 'react';
// logo
import LogoWhite from "../assets/img/logo-white.png"
import LogoDark from "../assets/img/logo-dark.png"

const Header = () => {
  const [header, setHeader] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })
  

  return (
    <div className={`${header ? "bg-white shadow-lg" : "bg-transparent py-2"} fixed z-50 w-full transition-all duration-600`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          {header ? (
            <img className="w-[120px]" src={LogoDark} alt="logo dark" />
          ) : (
            <img className="w-[120px]" src={LogoWhite} alt="logo white" />
          )}
        </a>
        {/* nav */}
        <nav className={`${header ? "text-primary" : "text-white"} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="#rooms" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="#" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="#" className="hover:text-accent transition">
            Spa
          </a>
          <a href="#" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
};

export default Header;
