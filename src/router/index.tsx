import MainLayout from "@/components/Layout/MainLayout";
import Contact from "@/pages/Contact/Contact";
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
    ]
    }

])

export default router;