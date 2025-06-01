

const blogs = [
    {
        id: 1,
        image: "https://astromanch.com/public/storage/images/blog_2081747200722.webp",
        title: "Planetary Transits and Eclipses in May 2025",
        subtitle: "How They Will Shape Your Destiny",
        desc: "The year 2025 has already reached...",
    },
    {
        id: 2,
        image: "https://astromanch.com/public/storage/images/blog_2021745490264.webp",
        title: "NARASIMHA JAYANTI 2025",
        subtitle: "Significance, Rituals, and Astrological Insights",
        desc: "You have heard many mythological...",
    },
    {
        id: 3,
        image: "https://astromanch.com/public/storage/images/blog_2041746445265.webp",
        title: "PARSHURAM JAYANTI AND YOUR HOROSCOPE",
        subtitle: "Best Day for Karmic Healing and Dhan Prapti",
        desc: "Through astrological insights,...",
    },
];

const LatestBlogs = () => {
    return (
        <section className="bg-[#311b92] py-26 rounded-b-[100px] border-2 border-yellow-300 my-26">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-white text-center text-3xl font-bold mb-12">
                    <span className="relative inline-block">
                        <span className="absolute left-1/2 -top-6 w-8 h-1 bg-yellow-400 transform -translate-x-1/2"></span>
                        Latest Blogs
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md"
                        >
                            <div
                                className="h-48 bg-cover bg-center "
                                style={{
                                    backgroundImage: `url(${blog.image})`,
                                }}
                            >
                                <div className="bg-opacity-60 text-white p-4 h-full flex flex-col justify-end">
                                    <h3 className="text-yellow-400 font-semibold text-sm shadow-black shadow-2xl drop-shadow-2xl drop-shadow-black">
                                        {blog.title}
                                    </h3>
                                    <p className="text-xs">{blog.subtitle}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-zinc-300">
                                <p className="text-sm font-semibold">{blog.desc}</p>
                                <p className="text-xs mt-1 text-gray-800">{blog.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
