import { useState } from 'react';
import bg from "../../assets/Image/Image.png";
import profile from "../../assets/Image/profile.png";
import Logo from "../../assets/Image/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative -mt-32">
      {/* Navbar */}
      <nav className="w-full container mx-auto absolute top-0 z-20 mt-5 md:mt-0">
        <div className="flex flex-wrap items-center justify-between mx-auto pt-4 px-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="GetPay Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-black bg-white hover:bg-gray-100 font-medium rounded-full text-sm px-4 py-2 text-center"
            >
              Sign Up
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {['Home', 'About', 'Blog', 'Pages', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative mt-24 px-4 md:px-0">
        {/* Background image */}
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-center"
        />

        {/* Main content */}
        <main className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 z-10 md:mt-0 mt-24">
            <h2 className="text-3xl md:text-5xl text-start font-bold leading-tight mb-4 text-black">
              The easiest way to manage personal finances
            </h2>
            <p className="text-lg text-start mb-6 text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex space-x-4">
              <button className="bg-cyan-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base">
                Get Your Card
              </button>
              <button className="text-black font-semibold text-sm md:text-base">How it works</button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative mt-8 md:mt-32 md:mr-24">
            <img
              src={profile}
              alt="Person holding a tablet"
              className="rounded-lg w-full"
            />

            <div className="absolute top-1/2 right-0 md:mr-0 mr-10 transform translate-x-1/4 -translate-y-1/2 bg-gradient-to-r from-pink-400 to-red-400 p-6 md:p-6 rounded-lg shadow-lg">
              <p className="text-white text-xs md:text-sm mb-2">Universal Card</p>
              <p className="text-white text-lg md:text-xl font-bold mb-4">
                5214 4321 5678 4345
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white text-xs md:text-sm">Robert Fox</p>
                <p className="text-white text-xs md:text-sm">12/25</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Header;