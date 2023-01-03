import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const products = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Lorem ipsum dolor",
    description: "Nullam dictum felis",
    price: "7.99",
    quantity: "1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Nulla consequat",
    description: "Phasellus viverra nulla",
    price: "11.99",
    quantity: "1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/934729/pexels-photo-934729.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Donec quam felis",
    description: "Aenean imperdiet",
    price: "13.99",
    quantity: "1",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Quisque rutrum felis",
    description: "Etiam ultricies nisi",
    price: "4.99",
    quantity: "1",
  },
];

const browseCartAbandonment = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <article className="w-full max-w-full sm:max-w-2xl mx-auto bg-[#002a4d] rounded-lg p-4 py-8 sm:p-8">
          <motion.div variants={childrenVariants} className="mb-8">
            <h2 className="font-greycliff text-white text-2xl sm:text-4xl leading-8 sm:leading-10 text-center mb-3 mx-auto max-w-2xl">
              Lorem ipsum dolor sit amet
            </h2>
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className="grid gap-2 sm:gap-4 grid-cols-6 mb-4"
          >
            <div className="col-span-4 font-opensans text-white">
              Product
            </div>
            <div className="col-span-1 font-opensans text-white text-center">
              Qty
            </div>
            <div className="col-span-1 font-opensans text-white text-right">
              Price
            </div>
          </motion.div>
          {products.map(({ id, image, name, description, quantity, price }) => {
            return (
              <motion.div
                variants={childrenVariants}
                className="grid gap-2 sm:gap-4 grid-cols-6 mb-4"
                key={id}
              >
                <div className="col-span-1">
                  <img className="w-full" src={image} />
                </div>
                <div className="col-span-3">
                  <p className="font-opensans text-white text-xl sm:text-2xl mb-2">
                    {name}
                  </p>
                  <p className="text-white leading-5">{description}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white text-center">({quantity})</p>
                </div>
                <div className="col-span-1">
                  <p className="text-white text-right">£{price}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div
            variants={childrenVariants}
            className="text-center sm:text-right"
          >
            <div className="block sm:inline mr-0 mr-0 sm:mr-6">
              <a className="text-base text-[#002a4d] bg-white inline-block cursor-pointer px-8 py-3 mt-4">
                Continue Shopping
              </a>
            </div>
            <div className="block sm:inline">
              <a className="text-base text-white bg-[#002a4d] inline-block cursor-pointer px-8 py-3 mt-4">
                Back To Cart
              </a>
            </div>
          </motion.div>
        </article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default browseCartAbandonment;
