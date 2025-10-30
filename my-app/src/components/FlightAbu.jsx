import React, { useState } from "react";
import videoBg from "../assets/6985760-uhd_3840_2160_30fps.mp4";
import people from "../assets/IMG_7758.PNG";
import { Link } from "react-router-dom";

const travelData = [
    { city: "Melbourne", desc: "An amazing journey", price: 700, img: "https://www.gold1043.com.au/wp-content/uploads/sites/4/2024/02/melbourne.png?crop=0,0,47,100&resize=680,816&quality=75" },
    { city: "Paris", desc: "A Paris Adventure", price: 600, img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg" },
    { city: "London", desc: "London eye adventure", price: 350, img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg" },
    { city: "Columbia", desc: "Amazing streets", price: 700, img: "https://freedomhouse.org/sites/default/files/styles/768x400_fp_scale_crop_/public/2019-10/colombia-fotn2019-countryhero.jpg?h=2659976f&itok=01iuBEO6" },
    { city: "Dubai", desc: "Luxury escape", price: 850, img: "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg" },
    { city: "Tokyo", desc: "City of future", price: 900, img: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg" },
    { city: "Rome", desc: "Historic beauty", price: 500, img: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg" },
    { city: "Bali", desc: "Island paradise", price: 650, img: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/olvu6sgb3dcdjwlcpts3.jpg" }
];

const FlightsSearch = () => {
    const [showAll, setShowAll] = useState(false);
  const [showMore, setShowMore] = useState(false); // новое состояние для второго блока

    return (
        <div>

            {/* Видео фон */}
            <div className="relative w-full h-[600px] overflow-hidden">
                <video
                    className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-[-1]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={videoBg} type="video/mp4" />
                </video>

                <div className="relative pl-50 pt-30 h-full text-white">
                    <h1 className="text-7xl font-bold mb-6 drop-shadow-lg">
                        Make your travel <br /> wishlist, we’ll do <br /> the rest
                    </h1>
                    <p className="text-3xl font-bold mb-6 drop-shadow-lg">Special offers to suit your plan</p>
                </div>
            </div>


            <main>
                <div className="pl-30 mt-10">
                    <h1 className="text-5xl font-semibold mb-4">Let's go places together</h1>
                    <p className="text-sm mb-4">Discover the latest offers and news and start planning your next trip with us.</p>
                </div>
                <img src={people} alt="People" className="h-160 w-full" />
            </main>


            <main>
                <div className="pl-30 mt-10">
                    <h1 className="text-5xl font-semibold mb-4">Fall into travel</h1>
                    <p className="text-[20px] mb-4">
                        Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got <br />
                        the travel tools to get you to your destination.
                    </p>
                </div>

                <div className="px-6 md:px-16 lg:px-24 py-10">
                    <div className="flex justify-end items-center mb-6">

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="border px-5 py-2 rounded-md hover:bg-black hover:text-white transition"
                        >
                            {showAll ? "Show Less" : "See All"}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {(showAll ? travelData : travelData.slice(0, 4)).map((item, index) => (
                            <div
                                key={index}
                                className="relative group rounded-2xl overflow-hidden shadow-lg h-[380px] cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                            >
                                <img src={item.img} alt={item.city} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold">{item.city}</h3>
                                        <span className="text-lg font-semibold">${item.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-200">{item.desc}</p>

                                   <Link to='/BiletAbu'><button className="opacity-0 group-hover:opacity-100 mt-4 w-full py-2 bg-green-200 text-black font-medium rounded-md transition duration-500">
                                        Book Flight
                                    </button></Link> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





                    {/* Main Content */}
              










                 <div className="px-6 py-10 bg-white">
        <div className="pl-30 mt-10">
          <h1 className="text-5xl font-semibold mb-4">Fall into travel</h1>
          <p className="text-[20px] mb-4">
            Going somewhere to celebrate this season? Whether you’re going home or
            somewhere to roam, we’ve got <br />
            the travel tools to get you to your destination.
          </p>
        </div>

        <div className="flex justify-end items-start pr-20 mb-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-100"
          >
            {showMore ? "Show Less" : "See All"}
          </button>
        </div>

        {/* Главный контент */}
        <div className="grid grid-cols-1 p-10 md:grid-cols-2 gap-6">
          {/* Текстовый блок */}
          <div className="bg-[#BCE3CC] p-6 rounded-lg flex flex-col justify-between shadow-lg">
            <div>
              <span className="bg-white text-black text-sm px-3 py-1 rounded-full float-right mb-2">
                From $700
              </span>
              <h3 className="text-4xl font-bold mb-4">Backpacking <br /> Sri Lanka</h3>
              <p className="text-gray-700">
                Traveling is a unique experience as it's the best way to unplug from the
                <br /> pushes and pulls of daily life. It helps us to forget about our problems,
                <br /> frustrations, and fears at home. During our journey, we experience life in
                <br /> different ways. We explore new places, cultures, cuisines, traditions, and
                <br /> ways of living.
              </p>
            </div>
          <Link to="/BiletAbu"> <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
              Book Flight
            </button></Link> 
          </div>

          {/* Сетка изображений */}
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
              "https://oceanjar-new.s3.ap-south-1.amazonaws.com/sri_lanka_991797e44f.jpg",
              "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/246c20bb-9b41-4177-bd14-b9942884b5c6/The_Common_Wanderer_-2.jpg",
              "https://visasnews.com/wp-content/uploads/2025/10/eta-sri-lanka-visa-electronic-travel-authorization-evisa.jpg",
            ].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`img${idx + 1}`}
                className="rounded-lg object-cover w-full h-40 md:h-52 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Блок, который показываем по кнопке See All */}
        {showMore && (
          <div className="mt-10 grid grid-cols-1 p-10 md:grid-cols-2 gap-6 bg-gray-50 rounded-lg shadow-inner">
            {/* Можно заменить на данные про другую страну */}
            <div className="bg-[#BCE3CC] p-6 rounded-lg flex flex-col justify-between shadow-lg">
              <div>
                <span className="bg-white text-black text-sm px-3 py-1 rounded-full float-right mb-2">
                  From $850
                </span>
                <h3 className="text-4xl font-bold mb-4">Discover Tokyo</h3>
                <p className="text-gray-700">
                  Tokyo is a vibrant city blending modern technology with traditional culture.
                  Explore its neon-lit streets, historic temples, and delicious cuisine.
                </p>
              </div>
            <LInk to='/BiletAbu'> <button className="mt-6 bg-white text-black font-semibold py-2 px-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
                Book Flight
              </button>
               </LInk> 
            </div>
           

            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg",
                "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg",
                "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg",
                "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`tokyo-img${idx + 1}`}
                  className="rounded-lg object-cover w-full h-40 md:h-52 transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-sm"
                />
              ))}
            </div>
          </div>
        )}
      </div>
            </main> 

        </div>
    );
};

export default FlightsSearch;
