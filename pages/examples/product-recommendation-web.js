import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import Slider from "react-slick";

const dataCapture = () => {
  const router = useRouter();

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-14 px-4 sm:px-8">
        <motion.div variants={childrenVariants} className="text-center">
          <Slider {...sliderSettings}>
            <div className="flex flex-col flex-wrap justify-center items-center border-gray-50 border-4 rounded-lg p-4">
              <img
                src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                className="cursor-pointer mb-3"
              />
              <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl leading-6 cursor-pointer">
                Lorem ipsum dolor
              </h2>
              <p className="text-base mb-3">Nullam dictum felis</p>
              <p className="font-proxima-bold mb-5">£7.99</p>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-2">
                Learn More
              </a>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center border-gray-50 border-4 rounded-lg p-4">
              <img
                src="https://images.pexels.com/photos/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                className="cursor-pointer mb-3"
              />
              <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl leading-6 cursor-pointer">
                Nulla consequat
              </h2>
              <p className="text-base mb-3">
                Phasellus viverra nulla
              </p>
              <p className="font-proxima-bold mb-5">£11.99</p>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-2">
                Learn More
              </a>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center border-gray-50 border-4 rounded-lg p-4">
              <img
                src="https://images.pexels.com/photos/934729/pexels-photo-934729.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                className="cursor-pointer mb-3"
              />
              <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl leading-6 cursor-pointer">
                Donec quam felis
              </h2>
              <p className="text-base mb-3">Aenean imperdiet</p>
              <p className="font-proxima-bold mb-5">£13.99</p>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-2">
                Learn More
              </a>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center border-gray-50 border-4 rounded-lg p-4">
              <img
                src="https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="cursor-pointer mb-3"
              />
              <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl leading-6 cursor-pointer">
              Quisque rutrum
              </h2>
              <p className="text-base mb-3">Etiam ultricies nisi</p>
              <p className="font-proxima-bold mb-5">£4.99</p>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-2">
                Learn More
              </a>
            </div>
          </Slider>
        </motion.div>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <article>
          <motion.div variants={childrenVariants} className="text-center">
            <a
              className="text-base text-pavilion-purple duration-300 hover:text-white bg-white hover:bg-pavilion-purple border-pavilion-purple border-2 inline-block cursor-pointer px-8 py-2"
              onClick={() => router.back()}
            >
              Exit Preview
            </a>
          </motion.div>
        </article>
      </section>
    </motion.div>
  );
};

export default dataCapture;
