/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFacilityQuery } from "@/redux/api/facility/facilityApi";
import Card from "../Components/Card";

const Facilities = () => {
  const { data } = useGetFacilityQuery(undefined);
  const facilities = data?.data;
  console.log(facilities);
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8]  h-full pt-12 ">
      <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-5xl  tracking-tighter pb-10 lg:pb-24 pt-6 lg:pt-10">
        "Discover & Book Top Sports Venues Near You"
      </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {facilities?.filter((item:any) => !item.isDeleted ).map((item, index) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
