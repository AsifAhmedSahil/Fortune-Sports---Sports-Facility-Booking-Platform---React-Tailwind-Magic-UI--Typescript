import Dashboard from "@/components/Layout/Dashboard";
import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About/AboutUs";
import BookingDetails from "@/pages/Components/BookingDetails";
import ProductDetails from "@/pages/Components/ProductDetails";
import Contact from "@/pages/Contact/Contact";
import AddAdmin from "@/pages/DashboardPages.tsx/AddAdmin";
import AddFacilities from "@/pages/DashboardPages.tsx/AddFacilities";
import AllBookings from "@/pages/DashboardPages.tsx/AllBookings";
import GetFacilities from "@/pages/DashboardPages.tsx/GetFacilities";
import Invoices from "@/pages/DashboardPages.tsx/Invoices";
import MyBookings from "@/pages/DashboardPages.tsx/MyBookings";
import ProfileSetting from "@/pages/DashboardPages.tsx/ProfileSetting";
import Statistics from "@/pages/DashboardPages.tsx/Statistics";

import Facilities from "@/pages/Facilities/Facilities";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/shared/NotFound";
import Login from "@/pages/Social/Login";
import Register from "@/pages/Social/Register";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout />,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "facilities",
        element: <Facilities />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "/facilities/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/api/facility/${params.id}`)
      },
      {
        path: "/facilities/booking-details/:id",
        element: <BookingDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/api/facility/${params.id}`)

        
      },
    ]
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement:<NotFound></NotFound>,
      children: [
       {
        path:"/dashboard/my-bookings",
        element : <MyBookings/>
       },
       {
        path:"/dashboard/invoices",
        element : <Invoices/>
       },
       {
        path:"/dashboard/profile-setting",
        element : <ProfileSetting/>
       },
       {
        path:"/dashboard/add-facilities",
        element : <AddFacilities/>
       },
       {
        path:"/dashboard/get-facilities",
        element : <GetFacilities/>
       },
       {
        path:"/dashboard/all-bookings",
        element : <AllBookings/>
       },
       {
        path:"/dashboard/add-admin",
        element : <AddAdmin/>
       },
       {
        path:"/dashboard/statistics",
        element : <Statistics/>
       },
        
      ]
    }

])

export default router;