
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosStar } from "react-icons/io";
// import required modules
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ReviewSlider = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const handelData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/decendingreviews`)
            setReviews(data)
        }
        handelData()
    }, [reviews])
    return (
        <div className='my-10'>
            <>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}

                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    modules={[EffectFade, Navigation, Autoplay]}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    className="mySwiper"

                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} review={review}>
                            <div className="p-4 shadow-md z-40 my-4">
                                <p className="flex items-center">{review.rating}{[...Array(parseInt(review.rating))].map((rat, index) => <IoIosStar key={index} className="text-pink-500"></IoIosStar>)}</p>
                                <p className="font-semibold">{review.userName}</p>
                                <p>{review.reviewDate}</p>
                                <p >{review.comment.length > 100 ?
                                    <p>{review.comment.slice(0, 100)}...</p> : review.comment
                                }</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </>
        </div>
    );
};

export default ReviewSlider;