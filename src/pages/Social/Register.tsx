// import { BorderBeamDemo } from '@/components/BorderBeamDemo'
import Lottie from "lottie-react"
import registerGif from "@/Animation - 1724608571023.json"
import { Link } from "react-router-dom"


const Register = () => {
  return (
    <div className="flex h-screen ">
    {/* Login Form Section */}
     {/* Animated GIF Section */}
     <div className="hidden md:flex md:w-1/2 items-center justify-center bg-black p-36">
      <Lottie animationData={registerGif} />
    </div>
    {/* <BorderBeamDemo/> */}
    <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 ">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-white">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Phone Number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2 w-full"
          >
            Sign Up
          </button>
        </form>
        <Link to={"/login"} >
        <div className="mt-4 text-center">
          <p className="text-sm text-white">Already Log In?  <a href="#" className="text-red-600 hover:underline">Login</a></p>
        </div>
        </Link>
      </div>
    </div>

   
  </div>

  )
}

export default Register