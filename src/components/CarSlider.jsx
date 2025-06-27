import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function CarSlider() {
  const images = [
    "/assets/slider1.jpg",
    "/assets/slider2.jpg",
    "/assets/slider3.jpg",
    "/assets/slider4.jpg",
  ];

  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          loop
          autoplay={{ delay: 2500 }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-72 object-cover rounded-lg shadow-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
