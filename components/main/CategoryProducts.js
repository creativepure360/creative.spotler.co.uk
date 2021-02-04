import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

import { motion } from "framer-motion";

const CategoryProducts = ({ category }) => {
  const [{ products }] = category;

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(({ id, name, exerpt, type, slug }, index) => (
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
            <span className="text-floss-pink uppercase pb-2 text-xs mb-2">
              {type}
            </span>
            <h3 className="font-avant-garde-bold text-2xl sm:text-3xl mb-3">{name}</h3>
            <BlockContent blocks={exerpt} />
            <Link href={`/products/${slug}`}>
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

export default CategoryProducts;
