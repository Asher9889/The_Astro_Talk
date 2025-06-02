import { PhoneCall, MessageCircle } from "lucide-react";

const astrologers = [
  {
    name: "Shastri Vichittar",
    expertise: "Vedic, Lal kitab",
    imageUrl: "https://images.unsplash.com/photo-1665251934272-27bf651f0548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Numero Akshita",
    expertise: "Tarot, Numerology",
    imageUrl: "https://images.unsplash.com/photo-1697083540631-e395d6d8cb6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shastri Vichittar",
    expertise: "Vedic, Lal kitab",
    imageUrl: "https://images.unsplash.com/photo-1665251934272-27bf651f0548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Numero Akshita",
    expertise: "Tarot, Numerology",
    imageUrl: "https://images.unsplash.com/photo-1697083540631-e395d6d8cb6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shastri Vichittar",
    expertise: "Vedic, Lal kitab",
    imageUrl: "https://images.unsplash.com/photo-1665251934272-27bf651f0548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Numero Akshita",
    expertise: "Tarot, Numerology",
    imageUrl: "https://images.unsplash.com/photo-1697083540631-e395d6d8cb6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shastri Vichittar",
    expertise: "Vedic, Lal kitab",
    imageUrl: "https://images.unsplash.com/photo-1665251934272-27bf651f0548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Numero Akshita",
    expertise: "Tarot, Numerology",
    imageUrl: "https://images.unsplash.com/photo-1697083540631-e395d6d8cb6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shastri Vichittar",
    expertise: "Vedic, Lal kitab",
    imageUrl: "https://images.unsplash.com/photo-1665251934272-27bf651f0548?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Numero Akshita",
    expertise: "Tarot, Numerology",
    imageUrl: "https://images.unsplash.com/photo-1697083540631-e395d6d8cb6b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const TopAstrologers = () => {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold text-yellow-500 mb-12">
        Our Top Astrologers
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {astrologers.map((astro, idx) => (
          <div key={idx} className="relative w-72 ">
            {/* SVG bump background */}
            <svg
              viewBox="0 0 370 355"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M46.25 0C33.9837 0 22.2199 4.8695 13.5463 13.5373C4.87275 22.205 0 33.961 0 46.2191L0 231.095C0 243.353 4.87275 255.109 13.5463 263.777C22.2199 272.445 33.9837 277.315 46.25 277.315H104.062C107.653 277.315 111.193 278.15 114.404 279.754C117.615 281.359 120.408 283.688 122.563 286.558L166.5 345.095C168.654 347.965 171.447 350.294 174.658 351.899C177.869 353.503 181.41 354.339 185 354.339C188.59 354.339 192.131 353.503 195.342 351.899C198.553 350.294 201.346 347.965 203.5 345.095L247.437 286.558C249.592 283.688 252.385 281.359 255.596 279.754C258.807 278.15 262.347 277.315 265.938 277.315H323.75C336.016 277.315 347.78 272.445 356.454 263.777C365.127 255.109 370 243.353 370 231.095V46.2191C370 33.961 365.127 22.205 356.454 13.5373C347.78 4.8695 336.016 0 323.75 0L46.25 0Z"
                fill="white"
              />
            </svg>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 px-4">
              <img
                src={astro.imageUrl}
                alt={astro.name}
                className="w-20 h-20 rounded-lg object-cover mb-3 shadow"
              />
              <h3 className="text-base font-semibold text-gray-800">{astro.name}</h3>
              <p className="text-sm text-gray-500 mb-8">{astro.expertise}</p>

              {/* Bottom icons */}
              <div className="absolute bottom-10 flex justify-center gap-32 w-full ">
                <div className="bg-yellow-100 p-3 rounded-full shadow-black shadow-md">
                  <MessageCircle className="text-yellow-600 w-5 h-5" />
                </div>
                <div className="bg-green-100 p-3 rounded-full shadow-black shadow-md">
                  <PhoneCall className="text-green-600 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopAstrologers;
