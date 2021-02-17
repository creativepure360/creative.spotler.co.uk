import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import Slider from "react-slick";

const products = [
  {
    image:
      "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Lorem ipsum dolor",
    description: "Nullam dictum felis",
    price: "7.99",
  },
  {
    image:
      "https://images.pexels.com/photos/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Nulla consequat",
    description: "Phasellus viverra nulla",
    price: "11.99",
  },
  {
    image:
      "https://images.pexels.com/photos/934729/pexels-photo-934729.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Donec quam felis",
    description: "Aenean imperdiet",
    price: "13.99",
  },
  {
    image:
      "https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Quisque rutrum felis",
    description: "Etiam ultricies nisi",
    price: "4.99",
  },
];

const dataCapture = () => {
  const router = useRouter();

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-14 px-4 sm:px-8">
        <motion.div variants={childrenVariants} className="text-center">
          <Slider {...sliderSettings}>
            {products.map(({image, name, description, price}) => {
              return (
                <div className="flex flex-col flex-wrap justify-center items-center border-gray-50 border-4 rounded-lg p-4">
                  <img
                    src={image}
                    className="cursor-pointer mb-3"
                  />
                  <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl leading-6 cursor-pointer">
                    {name}
                  </h2>
                  <p className="text-base mb-3">{description}</p>
                  <p className="font-proxima-bold mb-5">£{price}</p>
                  <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3">
                    Add To Cart
                  </a>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <motion.article variants={childrenVariants} className="text-center">
          <a
            className="text-base text-pavilion-purple duration-300 hover:text-white bg-white hover:bg-pavilion-purple border-pavilion-purple border-2 inline-block cursor-pointer px-8 py-3"
            onClick={() =>
              router.push(router.pathname.replace("examples", "products"))
            }
          >
            Exit Preview
          </a>
        </motion.article>
      </section>
    </motion.div>
  );
};

export default dataCapture;
