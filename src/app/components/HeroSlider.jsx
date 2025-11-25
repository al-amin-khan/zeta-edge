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
        {
            id: 1,
            image: banner1,
            headline: "Upgrade Your Everyday Phone Experience",
            subtitle: "Discover fast, stylish smartphones with long battery life and official warranty — perfect for work, study, and entertainment.",
            primaryCta: {
                "label": "Shop Phones",
                "href": "/phone"
            },
        },
        {
            id: 2,
            image: banner2,
            headline: "Upgrade Your Everyday Phone Experience",
            subtitle: "Discover fast, stylish smartphones with long battery life and official warranty — perfect for work, study, and entertainment.",
            primaryCta: {
                label: "Shop Phones",
                href: "/phone"
            },
        },
        {
            id: 3,
            image: banner3,
            headline: "Power Up With Premium Accessories",
            subtitle: "Fast chargers, power banks, cables, and cases — everything you need to protect and power your devices all day long.",
            primaryCta: {
                "label": "Browse Accessories",
                "href": "/accessories"
            }
        },
        {
            id: 4,
            image: banner4,
            headline: "Stay Connected With Smart Watches",
            subtitle: "Track your steps, heart rate, notifications, and sleep in style with the latest smart watches for every lifestyle.",
            primaryCta: {
                label: "Explore Smart Watches",
                href: "/smart-watch"
            }
        }

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
                                    <div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-4">{slide.headline}</h2>
                                        <p className="text-md md:text-lg lg:text-xl text-white drop-shadow-lg mb-6 max-w-lg">{slide.subtitle}</p>
                                    </div>
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