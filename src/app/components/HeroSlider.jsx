'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/slider/headphone.jpg';
import banner2 from '../assets/slider/laptop.jpg';
import banner3 from '../assets/slider/watch-2.jpg';
import banner4 from '../assets/slider/watch.jpg';
import Link from 'next/link';

const HeroSlider = () => {
    const slideContent = [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
        { id: 3, image: banner3 },
        { id: 4, image: banner4 },
    ]
    return (
        <div className='rounded-2xl mx-auto'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper rounded-2xl"
            >
                {
                    slideContent.map(slide => (
                        <SwiperSlide key={slide.id} className='rounded-2xl'>
                            <div
                                className="min-w-full min-h-full object-scale-down bg-center bg-cover rounded-2xl mt-2"
                                style={{ backgroundImage: `url(${slide.image.src})` }}
                            >
                                <div className="h-60 md:h-96 lg:h-[500px] w-full rounded-2xl p-2 content-end pb-15 pl-16">
                                    <div className="navbar-end space-x-1 text-center">
                                        <Link href="#" className="btn bg-primary px-5 py-2 text-neutral rounded-2xl ">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default HeroSlider;