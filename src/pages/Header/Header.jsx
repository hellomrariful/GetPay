
import bg from "../../assets/Image/Image.png";
import profile from "../../assets/Image/profile.png";
import Logo from "../../assets/Image/Logo.png";

const Header = () => {
  return (
    <header className="relative -mt-32">
      {/* Navbar */}
      <nav className="w-full container mx-auto absolute top-0 z-10">
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
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="relative mt-24">
        {/* Background image */}
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
        />

        {/* Main content */}
        <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl text-start font-bold leading-tight mb-4 text-black">
              The easiest way to manage personal finances
            </h2>
            <p className="text-lg text-start mb-6 text-gray-700">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="flex space-x-4">
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold">
                Get Your Card
              </button>
              <button className="text-black font-semibold">How it works</button>
            </div>
          </div>

          <div className="md:w-1/2 relative mr-24 mt-32">
            <img
              src={profile}
              alt="Person holding a tablet"
              className="rounded-lg"
            />

            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-gradient-to-r from-pink-400 to-red-400 p-6 rounded-lg shadow-lg">
              <p className="text-white text-sm mb-2">Universal Card</p>
              <p className="text-white text-xl font-bold mb-4">
                5214 4321 5678 4345
              </p>
              <div className="flex justify-between items-center">
                <p className="text-white text-sm">Robert Fox</p>
                <p className="text-white text-sm">12/25</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </header>
  );
};

export default Header;
