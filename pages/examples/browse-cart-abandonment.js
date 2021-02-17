import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const products = [
  {
    image:
      "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Lorem ipsum dolor",
    description: "Nullam dictum felis",
    price: "7.99",
    quantity: "1",
  },
  {
    image:
      "https://images.pexels.com/photos/2267872/pexels-photo-2267872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Nulla consequat",
    description: "Phasellus viverra nulla",
    price: "11.99",
    quantity: "1",
  },
  {
    image:
      "https://images.pexels.com/photos/934729/pexels-photo-934729.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Donec quam felis",
    description: "Aenean imperdiet",
    price: "13.99",
    quantity: "1",
  },
  {
    image:
      "https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Quisque rutrum felis",
    description: "Etiam ultricies nisi",
    price: "4.99",
    quantity: "1",
  },
];

const browseCartAbandonment = () => {
  const router = useRouter();

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-14 px-4 sm:px-8">
        <article
          className={`w-full max-w-9/10 sm:max-w-2xl mx-auto bg-pavilion-purple rounded-lg p-4 sm:p-8`}
        >
          <motion.div variants={childrenVariants} className="mb-8">
            <h2 className="font-avant-garde-bold text-white text-2xl sm:text-4xl leading-8 sm:leading-10 text-center mb-3 mx-auto max-w-2xl">
              Lorem ipsum dolor sit amet
            </h2>
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className="grid gap-4 grid-cols-6 mb-4"
          >
            <div className="col-span-4 font-proxima-bold text-white">
              Product
            </div>
            <div className="col-span-1 font-proxima-bold text-white text-center">
              Qty
            </div>
            <div className="col-span-1 font-proxima-bold text-white text-right">
              Price
            </div>
          </motion.div>
          {products.map(({ image, name, description, quantity, price }) => {
            return (
              <motion.div
                variants={childrenVariants}
                className="grid gap-4 grid-cols-6 mb-4"
              >
                <div className="col-span-1">
                  <img className="w-full" src={image} />
                </div>
                <div className="col-span-3">
                  <p className="font-proxima-bold text-white text-2xl mb-2">
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
          <motion.div variants={childrenVariants} className="text-right">
            <div className="block sm:inline mr-0 sm: mr-6">
              <a
                className="text-base text-pavilion-purple bg-white inline-block cursor-pointer px-8 py-3 mt-4"
                onClick={(e) => e.preventDefault()}
              >
                Continue Shopping
              </a>
            </div>
            <div className="block sm:inline">
              <a
                className="text-base text-white bg-floss-pink inline-block cursor-pointer px-8 py-3 mt-4"
                onClick={(e) => e.preventDefault()}
              >
                Back To Cart
              </a>
            </div>
          </motion.div>
        </article>
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

export default browseCartAbandonment;
