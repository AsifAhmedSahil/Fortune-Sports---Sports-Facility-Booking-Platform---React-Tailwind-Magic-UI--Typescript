import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About/AboutUs";
import Contact from "@/pages/Contact/Contact";
import Facilities from "@/pages/Facilities/Facilities";
import Home from "@/pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
    element: <MainLayout />,
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
    ]
    }

])

export default router;