import Footer from "@/pages/shared/Footer";
import { Navbar } from "@/pages/shared/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

import { NavLink, Outlet } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdAddToPhotos } from "react-icons/md";
import { MdSportsBasketball } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

const Dashboard = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full h-[150px] lg:h-[200px] bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#A46EDB_100%)] flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-5xl lg:text-6xl font-bold capitalize pb-5">
          {user?.role} Dashboard
        </h2>
        <h2 className="text-sm lg:text-xl font-semibold">
          Home {">"} Dashboard
        </h2>
      </div>

      <div className="bg-gray-200">
        <div className="max-w-7xl mx-auto flex">
          {user?.role === "user" ? (
            <>
              <NavLink
                to="/dashboard/my-bookings"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <SlCalender className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">My Bookings</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/invoices"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <LiaFileInvoiceDollarSolid className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Invoices</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/profile-setting"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <CiSettings className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Profile Setting</h2>
                </div>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/dashboard/statistics"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <MdAddToPhotos className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Statistics</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/add-facilities"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <MdAddToPhotos className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Add Facility</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/get-facilities"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <MdSportsBasketball className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Facilities</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/all-bookings"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <FaBookReader className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">All Bookings</h2>
                </div>
              </NavLink>
              <NavLink
                to="/dashboard/add-admin"
                className={({ isActive }) =>
                  `flex items-center justify-center h-32 w-48 m-10 cursor-pointer bg-white rounded-lg shadow-lg transition-transform transform ${
                    isActive ? "bg-green-700 text-white" : "text-black"
                  } hover:shadow-xl hover:scale-105`
                }
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <RiAdminLine className="text-4xl mb-2" />{" "}
                  {/* Adjust size as needed */}
                  <h2 className="text-lg font-semibold">Create Admin</h2>
                </div>
              </NavLink>
            </>
          )}
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
