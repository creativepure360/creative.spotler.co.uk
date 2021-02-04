import Link from "next/link";

import { motion } from "framer-motion";

const Heading = () => {
  return (
    <section className="mb-16">
      <div className="grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-3 mb-8 items-center">
        <motion.div
          animate={{
            y: 0,
            opacity: 1,
          }}
          initial={{
            y: -10,
            opacity: 0,
          }}
          transition={{ duration: 1, delay: 0 }}
          className="col-span-1 sm:col-span-2"
        >
          <h1 className="font-avant-garde-bold text-4xl sm:text-5xl leading-12 sm:leading-14 mb-4 sm:mb-8">
            Lorem
            <br />
            Ipsum Dolor.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <Link href="">
            <a className="text-base text-white hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
              Lorem Ipsum
            </a>
          </Link>
        </motion.div>
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: 100,
            opacity: 0,
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden sm:block col-span-1 mx-auto mb-8 sm:mb-0 bg-contain bg-no-repeat bg-center w-full h-full pt-50p sm:pt-100p"
          style={{
            backgroundImage: `url('https://cdn.sanity.io/images/w5xsgj13/production/0ea1fdb6d5764564c88a399f376a6e3d36513ec9-84x65.svg`,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Heading;
