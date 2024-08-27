/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFacilityQuery } from "@/redux/api/facility/facilityApi";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";
import { useState } from "react";

const Facilities = () => {
  const { data } = useGetFacilityQuery(undefined);
  const facilities = data?.data;
  console.log(facilities);


  const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = facilities?.slice(indexOfFirstProduct, indexOfLastProduct);

    

    const paginate = (pageNumber:any) => {
      setCurrentPage(pageNumber);
  };


  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8]  h-full pt-12 pb-12">
      <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-5xl  tracking-tighter pb-10 lg:pb-24 pt-6 lg:pt-10">
        "Discover & Book Top Sports Venues Near You"
      </h1>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentProducts?.filter((item:any) => !item.isDeleted ).map((item:any, index:any) => (
          <Card item={item} key={index} />
        ))}
      </div>
      <Pagination productsPerPage={productsPerPage} totalProducts={facilities?.length} paginate={paginate} activePage={currentPage} />
    </div>
  );
};

export default Facilities;
