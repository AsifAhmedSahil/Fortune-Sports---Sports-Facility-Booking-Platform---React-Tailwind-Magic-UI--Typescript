// import { BorderBeamDemo } from '@/components/BorderBeamDemo'
import Lottie from "lottie-react";
import loginGif from "@/Animation - 1724607496135.json";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useLoginMutation } from "@/redux/api/auth/authApi";
import { jwtDecode } from "jwt-decode";
import {  setToken, setUser } from "@/redux/features/userSlice";
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);

  const [login] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await login({ email, password });
    const { token } = data;

    const user = jwtDecode(token);
    console.log("logged in user", user);
    toast.success("Logged in successfully",{duration:2000})
    // const bearearToken = `Bearer ${token}`
    dispatch(setToken(token));
    dispatch(setUser(user));
    navigate("/")
  };

  return (
    <div className="flex h-screen ">
      {/* Login Form Section */}
      {/* <BorderBeamDemo/> */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-8 ">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
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
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex justify-center items-center gap-2 w-full"
            >
              Log In
            </button>
          </form>
          <Link to={"/signup"}>
            <div className="mt-4 text-center">
              <p className="text-sm text-white">
                Don't have an account?{" "}
                <a href="#" className="text-red-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Animated GIF Section */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-black">
        <Lottie animationData={loginGif} />
      </div>
    </div>
  );
};

export default Login;
