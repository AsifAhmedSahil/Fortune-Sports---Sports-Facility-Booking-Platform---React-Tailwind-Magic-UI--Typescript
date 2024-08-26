import Footer from "@/pages/shared/Footer";
import { Navbar } from "@/pages/shared/Navbar";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

// import { Outlet } from "react-router-dom"

const Dashboard = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  return (
    <div className="w-full">
      <Navbar />

      <div className="w-full h-[150px] lg:h-[200px] bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#A46EDB_100%)] flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-5xl lg:text-6xl font-bold capitalize pb-5">{user.role} Dashboard</h2>
        <h2 className="text-sm lg:text-xl font-semibold">Home {">"} Dashboard</h2>
      </div>

      {/* <div className="flex">
            <div className="w-64 min-h-full">
                sidebar
            </div>
            <div className="flex-1">
                <Outlet/>
                
            </div>
        </div> */}

      <Footer />
    </div>
  );
};

export default Dashboard;
