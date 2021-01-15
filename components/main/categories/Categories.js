import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

import { motion } from "framer-motion";

const Categories = ({ categories }) => {
  return (
    <>
      <motion.section
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -10,
          opacity: 0,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="font-avant-garde-bold text-4xl text-center mb-3 mx-auto leading-10 max-w-2xl">
          Lorem ipsum dolor sit amet.
        </h2>
        <h3 className="font-proxima-bold text-xl text-center mx-auto max-w-lg">
          Mauris pretium magna lectus, id placerat metus sollicitudin id.
          Interdum et malesuada fames ac ante.
        </h3>
      </motion.section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ id, title, exerpt, slug }, index) => (
          <motion.article
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: -10,
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 1 + index * 0.15 }}
            key={id}
            className="border-gray-50 border-4 rounded-lg p-8 m-2"
          >
            <h3 className="font-avant-garde-bold text-3xl mb-3">{title}</h3>
            <BlockContent blocks={exerpt} />
            <Link href={`/categories/${slug}`}>
              <a className="text-base text-white hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                Learn more
              </a>
            </Link>
          </motion.article>
        ))}
      </section>
    </>
  );
};

export default Categories;
