// "use client";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const Saleform = () => {
//   // Sample data array
//   const [cards] = useState([
//     { id: 1, title: "Car 1", description: "This is Car 1" },
//     { id: 2, title: "Car 2", description: "This is Car 2" },
//     { id: 3, title: "Car 3", description: "This is Car 3" },
//     { id: 4, title: "Car 4", description: "This is Car 4" },
//   ]);

//   const [selectedCard, setSelectedCard] = useState(null); // For modal open/close

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted for:", selectedCard, data);
//     reset(); // clear form
//     setSelectedCard(null); // close modal
//   };

//   return (
//     <div className="p-6">
//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             onClick={() => setSelectedCard(card)}
//             className="cursor-pointer border rounded-xl shadow-md p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-bold">{card.title}</h2>
//             <p className="text-gray-600">{card.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-bold mb-4">
//               Fill Form for {selectedCard.title}
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Name</label>
//                 <input
//                   type="text"
//                   {...register("name", { required: "Name is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", { required: "Email is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Message</label>
//                 <textarea
//                   {...register("message", { required: "Message is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your message"
//                 ></textarea>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedCard(null)}
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Saleform;

// "use client";

// import { vehicalsApi } from "@/lib/api/vehical";
// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";

// const Saleform = () => {
//   const [cards, setCards] = useState([]); // Cards will come from API
//   const [loading, setLoading] = useState(true);
//   const [selectedCard, setSelectedCard] = useState(null);

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted for:", selectedCard, data);
//     reset();
//     setSelectedCard(null);
//   };

//   // Fetch dealer vehicles from API
//   useEffect(() => {
//     const fetchDealerVehicles = async () => {
//       try {
//         const response = await vehicalsApi.dealerVechical();
//         console.log(response,"Ddddd")
//         // Make sure your API actually returns an array of vehicles
//         // If the API response is wrapped in data like { data: [...] }, adjust accordingly
//         setCards(response.data || []);
//       } catch (error) {
//         console.error("Error fetching dealer vehicles:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDealerVehicles();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10">Loading vehicles...</p>;
//   }

//   return (
//     <div className="p-6">
//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             onClick={() => setSelectedCard(card)}
//             className="cursor-pointer border rounded-xl shadow-md p-4 hover:shadow-lg transition"
//           >
//             <h2 className="text-xl font-bold">{card.title || card.name}</h2>
//             <p className="text-gray-600">{card.description || card.model}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-bold mb-4">
//               Fill Form for {selectedCard.title || selectedCard.name}
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Name</label>
//                 <input
//                   type="text"
//                   {...register("name", { required: "Name is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", { required: "Email is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Message</label>
//                 <textarea
//                   {...register("message", { required: "Message is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your message"
//                 ></textarea>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm">{errors.message.message}</p>
//                 )}
//               </div>

//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedCard(null)}
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Saleform;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import { vehicalsApi } from "@/lib/api/vehical";

// const Saleform = () => {
//   const [cards, setCards] = useState([]); // Cards from API
//   const [loading, setLoading] = useState(true);
//   const [selectedCard, setSelectedCard] = useState(null);

//   // React Hook Form setup
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted for:", selectedCard, data);
//     reset();
//     setSelectedCard(null);
//   };

//   // Fetch dealer vehicles from API
//   useEffect(() => {
//     const fetchDealerVehicles = async () => {
//       try {
//         const response = await vehicalsApi.dealerVechical();
//         console.log(response, "Dealer Vehicles Response");

//         // API me vehicles array `data` ke andar hai
//         setCards(response.data?.data || []);
//       } catch (error) {
//         console.error("Error fetching dealer vehicles:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDealerVehicles();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10">Loading vehicles...</p>;
//   }

//   return (
//     <div className="p-6">
//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             onClick={() => setSelectedCard(card)}
//             className="cursor-pointer border rounded-xl shadow-md p-4 hover:shadow-lg transition"
//           >
//             {/* Vehicle Image */}
//             {card.data.vehicleMedia?.length > 0 && (
//               <Image
//                 src={`/${card.vehicleMedia[0].url.replace("\\", "/")}`}
//                 alt={card.vehicleMedia[0].altText || "Vehicle"}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover rounded-md"
//               />
//             )}

//             {/* Vehicle Info */}
//             <h2 className="text-lg font-bold mt-3">
//               {card.vehicleModel?.name} - {card.trim?.name}
//             </h2>
//             <p className="text-gray-600">
//               Year: {card.trim?.year} | Condition: {card.condition}
//             </p>
//             <p className="text-sm">
//               Exterior:{" "}
//               <span style={{ color: card.exteriorColor?.hex }}>
//                 {card.exteriorColor?.name}
//               </span>{" "}
//               | Interior:{" "}
//               <span style={{ color: card.interiorColor?.hex }}>
//                 {card.interiorColor?.name}
//               </span>
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//             <h2 className="text-lg font-bold mb-4">
//               Fill Form for {selectedCard.vehicleModel?.name} -{" "}
//               {selectedCard.trim?.name}
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Name</label>
//                 <input
//                   type="text"
//                   {...register("name", { required: "Name is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm">{errors.name.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Email</label>
//                 <input
//                   type="email"
//                   {...register("email", { required: "Email is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your email"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email.message}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block font-medium">Message</label>
//                 <textarea
//                   {...register("message", { required: "Message is required" })}
//                   className="w-full border rounded p-2"
//                   placeholder="Enter your message"
//                 ></textarea>
//                 {errors.message && (
//                   <p className="text-red-500 text-sm">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedCard(null)}
//                   className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Saleform;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import { vehicalsApi } from "@/lib/api/vehical";
// import { Image_URL } from "@/config/constants";

// const Saleform = () => {
//     const [cards, setCards] = useState([]); // Cards from API
//     const [loading, setLoading] = useState(true);
//     const [selectedCard, setSelectedCard] = useState(null);

//     // React Hook Form setup
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log("Form submitted for:", selectedCard, data);
//         reset();
//         setSelectedCard(null);
//     };

//     useEffect(() => {
//         const fetchDealerVehicles = async () => {
//             try {
//                 const response = await vehicalsApi.dealerVechical();
//                 console.log("Dealer Vehicles Response:", response);

//                 setCards(response.data || []);
//             } catch (error) {
//                 console.error("Error fetching dealer vehicles:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchDealerVehicles();
//     }, []);

//     if (loading) {
//         return <p className="text-center mt-10">Loading vehicles...</p>;
//     }

//     return (
//         <div className="p-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {cards.map((card) => (
//                     <div
//                         key={card.id}
//                         onClick={() => setSelectedCard(card)}
//                         className="cursor-pointer border rounded-xl shadow-md p-4 hover:shadow-lg transition"
//                     >

//                         {card.vehicleMedia?.length > 0 ? (
//                             <Image
//                                 src={`${Image_URL}${card.vehicleMedia[0].url.replace(/\\/g, "/")}`}
//                                 alt={card.vehicleMedia[0].altText || "Vehicle"}
//                                 width={400}
//                                 height={250}
//                                 className="w-full h-48 object-cover rounded-md"
//                             />
//                         ) : (
//                             <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
//                                 <span className="text-gray-500">No Image</span>
//                             </div>
//                         )}

//                         <h2 className="text-lg font-bold mt-3">
//                             {card.vehicleModel?.name} - {card.trim?.name}
//                         </h2>
//                         <p className="text-gray-600">
//                             Year: {card.trim?.year} | Condition: {card.condition}
//                         </p>
//                         <p className="text-sm">
//                             Exterior:{" "}
//                             <span style={{ color: card.exteriorColor?.hex }}>
//                                 {card.exteriorColor?.name}
//                             </span>{" "}
//                             | Interior:{" "}
//                             <span style={{ color: card.interiorColor?.hex }}>
//                                 {card.interiorColor?.name}
//                             </span>
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {selectedCard && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
//                         <h2 className="text-lg font-bold mb-4">
//                             Fill Form for {selectedCard.vehicleModel?.name} -{" "}
//                             {selectedCard.trim?.name}
//                         </h2>

//                         {/* Form */}
//                         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                             <div>
//                                 <label className="block font-medium">Name</label>
//                                 <input
//                                     type="text"
//                                     {...register("name", { required: "Name is required" })}
//                                     className="w-full border rounded p-2"
//                                     placeholder="Enter your name"
//                                 />
//                                 {errors.name && (
//                                     <p className="text-red-500 text-sm">{errors.name.message}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block font-medium">Email</label>
//                                 <input
//                                     type="email"
//                                     {...register("email", { required: "Email is required" })}
//                                     className="w-full border rounded p-2"
//                                     placeholder="Enter your email"
//                                 />
//                                 {errors.email && (
//                                     <p className="text-red-500 text-sm">{errors.email.message}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label className="block font-medium">Message</label>
//                                 <textarea
//                                     {...register("message", { required: "Message is required" })}
//                                     className="w-full border rounded p-2"
//                                     placeholder="Enter your message"
//                                 ></textarea>
//                                 {errors.message && (
//                                     <p className="text-red-500 text-sm">
//                                         {errors.message.message}
//                                     </p>
//                                 )}
//                             </div>

//                             <div className="flex justify-between">
//                                 <button
//                                     type="button"
//                                     onClick={() => setSelectedCard(null)}
//                                     className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//                                 >
//                                     Close
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Saleform;






"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Image_URL } from "@/config/constants";
import { vehicalsApi } from "@/lib/api/vehical";

const Saleform = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);

    // React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // ✅ Submit Handler
    const onSubmit = async (data) => {
        if (!selectedCard) return;

        const payload = {
            vehicleId: selectedCard.id,
            mileage: selectedCard.mileage || 2323,
            zipCode: data.zipCode || "2232",
            price: selectedCard.price || 200000,
            description: data.message || "some description about vehicle for sale",
            sellerNote: data.sellerNote || "note",
            warranty:data.warranty||"aaaa",
            address:data.address||"address"
            
            // name: data.name,
            // email: data.email,
        };

        console.log("Payload sending:", payload);

        try {
            const res = await vehicalsApi.submitSale(payload); // 👈 API call
            console.log("Response:", res);
            alert("Form submitted successfully!");
            reset();
            setSelectedCard(null);
        } catch (err) {
            console.error("Error submitting form:", err);
        }
    };

    // ✅ Fetch vehicles
    useEffect(() => {
        const fetchDealerVehicles = async () => {
            try {
                const response = await vehicalsApi.dealerVechical();
                console.log("Dealer Vehicles Response:", response);
                setCards(response.data || []);
            } catch (error) {
                console.error("Error fetching dealer vehicles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDealerVehicles();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading vehicles...</p>;
    }

    return (
        <div className="p-6">
            {/* Vehicle Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => setSelectedCard(card)}
                        className="cursor-pointer border rounded-xl shadow-md p-4 hover:shadow-lg transition"
                    >
                        {card.vehicleMedia?.length > 0 ? (
                            <Image
                                src={`${Image_URL}${card.vehicleMedia[0].url.replace(/\\/g, "/")}`}
                                alt={card.vehicleMedia[0].altText || "Vehicle"}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover rounded-md"
                            />
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
                                <span className="text-gray-500">No Image</span>
                            </div>
                        )}

                        <h2 className="text-lg font-bold mt-3">
                            {card.vehicleModel?.name} - {card.trim?.name}
                        </h2>
                        <p className="text-gray-600">
                            Year: {card.trim?.year} | Condition: {card.condition}
                        </p>
                        <p className="text-sm">
                            Exterior:{" "}
                            <span style={{ color: card.exteriorColor?.hex }}>
                                {card.exteriorColor?.name}
                            </span>{" "}
                            | Interior:{" "}
                            <span style={{ color: card.interiorColor?.hex }}>
                                {card.interiorColor?.name}
                            </span>
                        </p>
                    </div>
                ))}
            </div>

            {/* Modal Form */}
        {selectedCard && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md max-h-[80vh] overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">
        Fill Form for {selectedCard.vehicleModel?.name} -{" "}
        {selectedCard.trim?.name}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Zip Code */}
        <div>
          <label className="block font-medium">Zip Code</label>
          <input
            type="text"
            {...register("zipCode", { required: "Zip Code is required" })}
            className="w-full border rounded p-2"
            placeholder="Enter your zip code"
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
          )}
        </div>

        {/* Warranty */}
        <div>
          <label className="block font-medium">Warranty</label>
          <input
            type="text"
            {...register("warranty", { required: "warranty is required" })}
            className="w-full border rounded p-2"
            placeholder="Enter warranty details"
          />
          {errors.warranty && (
            <p className="text-red-500 text-sm">{errors.warranty.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full border rounded p-2"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">Address</label>
          <textarea
            {...register("address", { required: "address is required" })}
            className="w-full border rounded p-2"
            placeholder="Enter your address"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Seller Note */}
        <div>
          <label className="block font-medium">Seller Note</label>
          <textarea
            {...register("sellerNote")}
            className="w-full border rounded p-2"
            placeholder="Enter seller note"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between sticky bottom-0 bg-white pt-4">
          <button
            type="button"
            onClick={() => setSelectedCard(null)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        </div>
    );
};

export default Saleform;
