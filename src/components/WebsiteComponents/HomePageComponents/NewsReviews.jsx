// import Image from "next/image";

// export default function NewsReviews() {
//   const newsData = [
//     {
//       image: "/Images/news2.png",
//       title: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
//       large: false,
//     },
//     {
//       image: "/Images/images3.jpg",
//       title: "Here Are the 10 Cheapest New Cars You Can...",
//       large: false,
//     },
//   ];

//   return (

//   <section className="w-full px-14 py-10 bg-white">
//   <header className="mb-8">
//     <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
//       News, Reviews & More
//     </h2>
//     <p className="text-gray-600 max-w-xl">
//       Stay ahead in the automotive world with expert insights, buying
//       guides, and maintenance tips.
//     </p>
//   </header>

//   <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
//     <article className="group relative rounded-xl overflow-hidden shadow-lg md:col-span-1 w-[600px]">
//       <img
//         src="/Images/news1.png"
//         alt="Stacked miniature cars on piles of coins representing car brands"
//         className="w-[1500px] h-[300px] sm:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
//         loading="lazy"
//       />
//       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white font-semibold text-base leading-snug">
//         Which Car Brands Offer the Best...
//       </div>
//     </article>

    
//     <div className="space-y-4 md:col-span-2 flex flex-col ml-[200px]">
//       {newsData.map((item, index) => {
//         return(
//       <article className="relative">
//         <img
//           src={item.image}
//           className="w-[600px] h-[170px] object-cover  group-hover:scale-105 rounded-xl"
//           loading="lazy"
//         />
//         <div className="absolute bottom-0 left-0 right-0  p-3 text-white font-semibold text-sm leading-snug">
//           {item.title}
//         </div>
//       </article>
//         )
//       })}
//     </div>
//   </div>

//   <div className="mt-8 text-center">
//     <button
//       type="button"
//       className="inline-flex items-center gap-2 bg-[#39348F] hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
//     >
//       <span>See all news</span>
//       {/* <span className="material-icons text-base">arrow_forward</span> */}
//     </button>
//   </div>
// </section>

//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function NewsReviews() {
  const newsData = [
    {
      image: "/Images/news2.png",
      title: "90,000-Plus Cadillac, Chevrolet Vehicles Recalled...",
      large: false,
    },
    {
      image: "/Images/images3.jpg",
      title: "Here Are the 10 Cheapest New Cars You Can...",
      large: false,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-14 py-10 bg-white">
      <header className="mb-8 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          News, Reviews & More
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
          Stay ahead in the automotive world with expert insights, buying
          guides, and maintenance tips.
        </p>
      </header>

      <div className="grid gap-6 md:gap-4 sm:grid-cols-1 md:grid-cols-3">
        {/* Left Large Image */}
        <article className="group relative rounded-xl overflow-hidden shadow-lg w-full md:w-[600px]">
          <img
            src="/Images/news1.png"
            alt="Stacked miniature cars on piles of coins representing car brands"
            className="w-full h-48 sm:h-60 md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white font-semibold text-sm sm:text-base leading-snug">
            Which Car Brands Offer the Best...
          </div>
        </article>

        {/* Right Section */}
        <div className="space-y-4 md:col-span-2 flex flex-col md:ml-[200px] ml-0 mt-4 md:mt-0">
          {newsData.map((item, index) => (
            <article key={index} className="relative">
              <img
                src={item.image}
                className="w-full md:w-[600px] h-40 sm:h-[170px] object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white font-semibold text-xs sm:text-sm leading-snug">
                {item.title}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
        href='/blog'
          type="button"
          className="inline-flex items-center gap-2 bg-[#39348F] hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-400 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
        >
          See all news
        </Link>
      </div>
    </section>
  );
}
