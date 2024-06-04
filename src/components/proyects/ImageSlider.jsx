import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

const ImageSlider = ({ images }) => {
  const imagesData = Array.isArray(images) ? images : [];

  return (
    <div className="w-3/4 mx-auto mb-5">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {imagesData.map((image, index) => (
          <SwiperSlide key={index}>
            <div className=" h-60 flex items-center justify-center ">
              <img
                src={image.url}
                alt={`slide-${index}`}
                className="my-auto h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
