// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <>
      <div className="flex justify-center p-10 bg-[url('https://i.ibb.co/3CHQCzD/banner-png.png')] bg-cover bg-no-repeat">
        <swiper-container
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          pagination-clickable="true"
          navigation="true"
          effect="cube"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          cube-effect-shadow-offset="20"
          cube-effect-shadow-scale="0.94"
          className="mySwiper max-w-xs"
        >
          <swiper-slide>
            <div className="flex flex-col gap-y-2 md:gap-y-8 justify-center items-center h-full px-4 lg:px-20 text-center bg-[#000000B3] rounded-xl">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500 font-merriweather">
                Luxury is a lifestyle.<br></br>Not just a possession.
              </h1>
              <p className="text-white px-6 md:px-10">
                Indulge in luxury living with LuxeLife Estates. Discover a world
                where every detail speaks volumes and every home is a
                masterpiece of opulence and refinement. Elevate your lifestyle
                and experience true extravagance.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-y-2 md:gap-y-8 justify-center items-center h-full px-4 lg:px-20 text-center bg-[#000000B3] rounded-xl">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500 font-merriweather">
                Luxury: where elegance meets opulence.
              </h1>
              <p className="text-white px-6 md:px-10">
                LuxeLife Estates unveils the epitome of refined living with our
                exclusive collection of prestigious properties. Explore our
                curated selection of luxurious villas, estates, and residences.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-y-2 md:gap-y-8 justify-center items-center h-full px-4 lg:px-20 text-center bg-[#000000B3] rounded-xl">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500 font-merriweather">
                In the world of luxury, every detail speaks volumes.
              </h1>
              <p className="text-white px-6 md:px-10">
                Discover the essence of luxury with LuxeLife Estates. Immerse
                yourself in a world where comfort meets extravagance, where
                every corner exudes elegance and every property is a testament
                to grandeur. Explore our portfolio of exquisite properties.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-y-2 md:gap-y-8 justify-center items-center h-full px-4 lg:px-20 text-center bg-[#000000B3] rounded-xl">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500 font-merriweather">
                Luxury: the art of living beautifully.
              </h1>
              <p className="text-white px-6 md:px-10">
                Elevate your lifestyle with LuxeLife Estates. Immerse yourself
                in the art of living beautifully as you explore our curated
                selection of luxurious properties.
              </p>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex flex-col gap-y-2 md:gap-y-8 justify-center items-center h-full px-4 lg:px-20 text-center bg-[#000000B3] rounded-xl">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-yellow-500 font-merriweather">
                Luxury: where comfort meets extravagance.
              </h1>
              <p className="text-white px-6 md:px-10">
                Experience the pinnacle of luxury living with LuxeLife Estates.
                Immerse yourself in unparalleled comfort and sophistication as
                you explore our exclusive collection of properties. From lavish
                villas to opulent estates, each residence is designed to
                redefine your idea of luxury.
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}
