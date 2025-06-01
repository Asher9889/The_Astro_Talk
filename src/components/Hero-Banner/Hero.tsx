// import ContentWrapper from "../content-wrapper/ContentWrapper";
import { Meteors } from "../index";
import SparklesText from "../Sparkles-Text/SparklesText";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules'; // ✅ Import

const Hero = () => {


    return (
        <section className="mt-6">

            <Meteors />

            <Swiper
                slidesPerView={1}

                modules={[Autoplay]} // ✅ Include Autoplay module

                autoplay={{ delay: 4000, disableOnInteraction: false }} // ✅ Add autoplay settings
                speed={2000}

            >

                <SwiperSlide>
                    <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                        <h1 className="text-5xl font-bold ">
                            <SparklesText sparklesCount={10}>
                                Chat with Astrologers Now
                            </SparklesText>
                        </h1>
                        <h3 className="font-medium opacity-70">
                            Find clarity on love, career, marriage, and more from Vedic Experts.
                        </h3>
                        <button className=" px-6 py-1.5 mt-2.5 rounded-3xl bg-(--color-yellow-300) text-black font-medium cursor-pointer">
                            Chat now
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                        <h1 className="text-5xl font-bold ">
                            <SparklesText sparklesCount={10}>
                                Chat with Astrologers Now
                            </SparklesText>
                        </h1>
                        <h3 className="font-medium opacity-70">
                            Find clarity on love, career, marriage, and more from Vedic Experts.
                        </h3>
                        <button className=" px-6 py-1.5 mt-2.5 rounded-3xl bg-(--color-yellow-300) text-black font-medium cursor-pointer">
                            Chat now
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                        <h1 className="text-5xl font-bold ">
                            <SparklesText sparklesCount={10}>
                                Chat with Astrologers Now
                            </SparklesText>
                        </h1>
                        <h3 className="font-medium opacity-70">
                            Find clarity on love, career, marriage, and more from Vedic Experts.
                        </h3>
                        <button className=" px-6 py-1.5 mt-2.5 rounded-3xl bg-(--color-yellow-300) text-black font-medium cursor-pointer">
                            Chat now
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                        <h1 className="text-5xl font-bold ">
                            <SparklesText sparklesCount={10}>
                                Chat with Astrologers Now
                            </SparklesText>
                        </h1>
                        <h3 className="font-medium opacity-70">
                            Find clarity on love, career, marriage, and more from Vedic Experts.
                        </h3>
                        <button className=" px-6 py-1.5 mt-2.5 rounded-3xl bg-(--color-yellow-300) text-black font-medium cursor-pointer">
                            Chat now
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[400px] bg-(--color-yellow-900) bg-opacity-90 flex flex-col justify-center items-center text-(--color-text-white)">
                        <h1 className="text-5xl font-bold ">
                            <SparklesText sparklesCount={10}>
                                Chat with Astrologers Now
                            </SparklesText>
                        </h1>
                        <h3 className="font-medium opacity-70">
                            Find clarity on love, career, marriage, and more from Vedic Experts.
                        </h3>
                        <button className=" px-6 py-1.5 mt-2.5 rounded-3xl bg-(--color-yellow-300) text-black font-medium cursor-pointer">
                            Chat now
                        </button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Hero;


