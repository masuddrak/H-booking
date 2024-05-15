
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from "../assets/banner1.jpg"
import banner3 from "../assets/banner2.jpg"

import banner2 from "../assets/bannner3.jpg"


// import required modules
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

export default function HomeBanner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
               
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
              
                modules={[EffectFade, Navigation,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner1})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900 flex justify-center items-center" >
                            <div className="space-y-5 p-5 w-full  lg:w-2/3  text-gray-200 text-center ">
                                <h2 className="text-2xl lg:text-6xl font-bold tracking-wide uppercase"> Every Moment Resonates Luxury</h2>
                                <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <button className="outline outline-1 outline-gray-200  px-4 py-2  uppercase">purchase now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner2})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900 flex justify-center items-center" >
                            <div className="space-y-5 p-5 w-full  lg:w-2/3  text-gray-200 text-center ">
                                <h2 className=" text-2xl lg:text-6xl font-bold tracking-wide uppercase">Welcome to Serenity Suites </h2>
                                <p>Indulge in our meticulously designed rooms and suites, each adorned with plush furnishings and modern amenities to ensure your utmost relaxation. </p>
                                    <button className="outline outline-1 outline-gray-200  px-4 py-2  uppercase">purchase now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner3})` }} className="min-h-[40vh] md:min-h-[70vh] w-full bg-center bg-no-repeat  bg-cover bg-slate-900 flex justify-center items-center" >
                            <div className="space-y-5 p-5 w-full  lg:w-2/3  text-gray-200 text-center ">
                                <h2 className="text-2xl lg:text-6xl font-bold tracking-wide uppercase">Where Every Stay is a Dream</h2>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                    <button className="outline outline-1 outline-gray-200  px-4 py-2  uppercase">purchase now</button>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
