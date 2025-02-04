import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const SliderData = [
    {
      heading: "Premium",
      subheading: "Best store around to buy premium and great clothes",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      heading: "Stylish",
      subheading: "Your ultimate destination for stylish and trendsetting clothes!",
      image: "https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?q=80&w=2078&auto=format&fit=crop"
    },
    {
      heading: "Elegant",
      subheading: "Discover premium fashion that defines elegance.",
      image: "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <Swiper
        effect="coverflow"
        loop={true}
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        style={{ width: "100%", height: "100%" }}
      >
        {SliderData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                textShadow: "2px 2px 5px rgba(0,0,0,0.8)",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <h1 style={{ fontSize: "40px", margin: "0" }}>{slide.heading}</h1>
              <p style={{ fontSize: "18px", marginTop: "10px" }}>{slide.subheading}</p>
            </div>
          </SwiperSlide>
        ))}
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} style={{ position: "absolute", bottom: "10px", right: "10px", width: "50px", height: "50px" }}>
            <circle cx="24" cy="24" r="20" stroke="white" strokeWidth="4" fill="transparent"></circle>
          </svg>
          <span ref={progressContent} style={{ color: "white", position: "absolute", bottom: "10px", right: "10px" }}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
