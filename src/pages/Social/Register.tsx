// import { BorderBeamDemo } from '@/components/BorderBeamDemo'
import Lottie from "lottie-react"
import registerGif from "@/Animation - 1724608571023.json"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setAddress, setEmail, setName, setPassword, setPhone } from "@/redux/features/registerSlice"
import { RootState } from "@/redux/store"
import { useSignUpMutation } from "@/redux/api/auth/authApi"
import { toast } from "sonner"
import axios from "axios"


const Register = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null);
    const dispatch=useAppDispatch()
    const {name,email,password,phone,address} = useAppSelector((state:RootState)=> state.register)
    const [signup] = useSignUpMutation()

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      setFile(file);
      
      // Perform additional actions with the file if needed
      // e.g., dispatch an action or upload the file
  };

    const handleSubmit =async (e:React.FormEvent) =>{
        e.preventDefault()


        const formData = new FormData();
    formData.append('image', file!);

    // Upload image to ImgBB
    const response = await axios.post(
      'https://api.imgbb.com/1/upload?key=36a0c300dd8725a59ef1d1b64fcdb73f',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // Log the response and extract the image URL
    console.log('Image upload response:', response.data);
    console.log(response.data.data.url)
    const image = response.data.data.url



        console.log(
            name,email,password,phone,address
        )
        const user = await signup({name,email,password,phone,address,image})
        toast.success("Registration successfully",{duration:2000})
        console.log(user)
        navigate("/login")

    }

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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
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
              value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
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
              value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
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
              value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          {/* file input - image */}
          <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-white dark:text-white">
                    Upload Your Photo
                </label>
                <input
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                    id="file_input"
                    type="file"
                    onChange={handleFileChange}
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