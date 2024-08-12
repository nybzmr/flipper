import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import SpaceOrange1 from "./assets/SpaceOrange1.jpeg";
import SpaceOrange2 from "./assets/SpaceOrange2.jpeg";
import SpaceOrange3 from "./assets/SpaceOrange3.jpeg";
import SpaceOrange4 from "./assets/SpaceOrange4.jpeg";
import SpaceCity from "./assets/SpaceCity.jpg";

import { FreeMode, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ServiceData } from "./constants";

const ActiveSlider = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);
    // const navigate = useNavigate();

    const handleFlip = (index) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    // const handleManageSlides = () => {
    //     navigate('/manageSlidesPage'); // Redirect to the ManageSlidesPage component
    // };

    return (
        <div className="relative flex items-center justify-center flex-col h-[100vh] py-8" 
            style={{ backgroundImage: `url(${SpaceCity})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
            {/* Manage Slides Button */}
            <button 
                // onClick={handleManageSlides}
                className="absolute top-4 right-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
            >
                Manage Slides
            </button>

            <Swiper
                slidesPerView={1} // Show one slide at a time
                centeredSlides={true} // Center the slide
                freeMode={true}
                pagination={false}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                modules={[FreeMode, Navigation]}
                className="max-w-[90%] lg:max-w-[70%]" // Adjusted width for a more centered look
            >
                {ServiceData.map((item, index) => (
                    <SwiperSlide key={item.title}>
                        <motion.div
                            className="relative shadow-lg rounded-xl cursor-pointer"
                            style={{ perspective: 1000 }}
                            onClick={() => handleFlip(index)}
                        >
                            <motion.div
                                className="relative h-[450px] w-[315px] lg:h-[500px] lg:w-[400px] rounded-xl mx-auto"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                                    transition: "transform 0.6s",
                                }}
                            >
                                {/* Front Side */}
                                <div
                                    className="absolute inset-0 flex flex-col justify-center items-center gap-4 group text-white rounded-xl px-6 py-8 h-full w-full"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(0deg)",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                                        style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                    />
                                    <div className="relative flex flex-col gap-3 items-center text-center">
                                        <h1 className="text-3xl lg:text-4xl font-bold">{item.title}</h1>
                                        <p className="lg:text-[20px]">{item.question}</p>
                                    </div>
                                    <RxArrowTopRight className="absolute bottom-5 right-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                                </div>

                                {/* Back Side */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-center text-lg p-4 bg-gray-200 text-gray-800 rounded-xl h-full w-full"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                    }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between w-full lg:max-w-[70%] px-6 mt-8">
                <button className="swiper-button-prev bg-white text-gray-800 py-8 lg:px-6 p-4 rounded hover:bg-gray-200">
                    <FaArrowLeft size={24} />
                </button>
                <button className="swiper-button-next bg-white text-gray-800 py-8 lg:px-6 p-4 rounded hover:bg-gray-200">
                    <FaArrowRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default ActiveSlider;
