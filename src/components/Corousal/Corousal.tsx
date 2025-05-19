import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


import "swiper/css";

// import "swiper/css/navigation";
// import "swiper/css/pagination";


const cardData = [
  {
    image: "https://images.unsplash.com/photo-1747372248943-33e9064aefab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nature View",
    description: "Experience the beauty of untouched nature.",
  },
  {
    image: "https://images.unsplash.com/photo-1746802401358-8325ed75ba5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Urban Life",
    description: "Explore the rhythm and buzz of the city.",
  },
  {
    image: "https://images.unsplash.com/photo-1744221127502-727af70bc6e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTF8fHxlbnwwfHx8fHw%3D",
    title: "Future Tech",
    description: "Dive into the innovations of tomorrow.",
  },
  {
    image: "https://images.unsplash.com/photo-1747171232978-0e1cbcbcbdf8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Space Wonders",
    description: "Discover the mysteries of the cosmos.",
  },
];

const Corousal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-lg"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Corousal;
