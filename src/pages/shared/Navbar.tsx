import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logosaas.png";
import { CiMenuBurger } from "react-icons/ci";
import { GradualSpacingDemo } from "@/components/GradualSpacingDemo";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 ">
        <div className="py-4  flex items-center justify-between">
          {/* logo + name */}
          <div className="flex items-center justify-center gap-4 ">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FBDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
              <Link to={"/"}>
                <img
                  src={logoImage}
                  alt="saas image"
                  className="h-12 w-12 relative"
                />
              </Link>
            </div>
            <div className="text-white text-sm lg:text-2xl font-bold">
              <Link to={"/"}>
                <GradualSpacingDemo />
              </Link>
            </div>
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-sm sm:hidden">
            <CiMenuBurger className="text-white" size={20} />
          </div>
          <nav className=" gap-8 items-center hidden sm:flex">
            <a
              href="/about"
              className="text-opacity-60 text-white hover:text-opacity-100  transition"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-opacity-60 text-white hover:text-opacity-100  transition"
            >
              Contacts
            </a>
            <a
              href="/facilities"
              className="text-opacity-60 text-white hover:text-opacity-100  transition"
            >
              Facilities
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100  transition"
            >
              Help
            </a>
            
          </nav>
          <div className="flex gap-4 hidden">
            <button
              type="button"
              className="text-black bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2"
            >
                
              Sign Up
              <span className="animate-ping duration-1"><FaLongArrowAltRight/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
