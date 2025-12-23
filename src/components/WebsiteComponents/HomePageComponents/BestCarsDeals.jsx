"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import { useBodyTypeStore } from "@/lib/store/bodyTypeStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function BestCarsDeals() {
  const { bodyType, isLoading, error, getAllBodyType } = useBodyTypeStore();
   const router = useRouter();

  // pagination state
  const itemsPerPage = 8;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getAllBodyType();
  }, [getAllBodyType]);

  const nextPage = () => {
    if (currentIndex + itemsPerPage < bodyType.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleCars = bodyType.slice(currentIndex, currentIndex + itemsPerPage);

  const handleBodyTypeSelect = (selected) => {
  const query = new URLSearchParams();

  query.append("bodyTypeId", selected.id); // ✅ add id
  query.append("bodyTypeName", encodeURIComponent(selected.name)); // ✅ add name

  router.push(`/cars-for-sale?${query.toString()}`);
};


  return (
    <section className="p-6 bg-white">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">
        Best Cars Deals & Services  
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        If GPS Off Show Trending Car Deal
      </p>

      {/* Tabs */}
      <div className="flex space-x-6 border-b mb-6">
        <button className="pb-2  font-medium">
          Cars for Sale
        </button>
        {/* <button className="pb-2 text-gray-500">Workshops</button>
        <button className="pb-2 text-gray-500">Towing Services</button> */}
      </div>

      <div className="flex">
        {/* Left Side Title + Arrows */}
        <div className="w-1/4 pr-4 hidden md:block mt-10">
          <h3 className="text-4xl font-semibold mb-4">
         Top Cars for Sale – Find the Best Deals 
          </h3>
          <div className="flex gap-2">
            <button
              onClick={prevPage}
              className="p-2 border rounded-full disabled:opacity-50"
              disabled={currentIndex === 0}
            >
             <HiChevronLeft size={20} />
            </button>
            <button
              onClick={nextPage}
              className="p-2 border rounded-full disabled:opacity-50"
              disabled={currentIndex + itemsPerPage >= bodyType.length}
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {isLoading && (
            <p className="col-span-4 text-center text-gray-500">
              Loading body types...
            </p>
          )}
          {error && (
            <p className="col-span-4 text-center text-red-500">{error}</p>
          )}
          {!isLoading &&
            !error &&
            visibleCars.map((car) => (
              <Link
              href={`/cars-for-sale?bodyTypeId=${car?.id}&bodyTypeName=${car?.name}`}
                key={car.id}
                className="flex flex-col items-center rounded-xl p-4 transition"
              >
                <Image
                  src={`${Image_URL}${car.image}`} // ✅ build full path
                  alt={car.name}
                  width={200}
                  height={120}
                  className="object-contain"
                />
                <p className="mt-3 font-medium">{car.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
