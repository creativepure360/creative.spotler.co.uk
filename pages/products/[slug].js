import Link from "next/link";
import client from "../../client-config";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Product = ({ product }) => {
  const [{ name, description, type, image }] = product;
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section>
        <motion.article className="mb-16" variants={childrenVariants}>
          <span className="text-floss-pink uppercase pb-2 text-lg mb-2">
            {type}
          </span>
          <h1 className="font-avant-garde-bold text-3xl sm:text-5xl leading-10 sm:leading-14 mt-2 mb-4 sm:mb-8">
            {name}
          </h1>
          <div className="mb-2">
            <BlockContent blocks={description} />
          </div>
          <a
            href="https://www.pure360.com/book-a-demo/"
            target="_blank"
            className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6"
          >
            Book a Demo
          </a>
        </motion.article>
      </section>
      <section>
        <motion.article className="" variants={childrenVariants}>
        <img className="" src={urlFor(image)} />
        </motion.article>
      </section>
    </motion.div>
  );
};

export const getStaticPaths = async () => {
  const products = await client.fetch(
    groq`*[_type == 'product']{"slug": slug.current}`
  );
  const paths = products.map((product) => ({ params: { slug: product.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == "${params.slug}"]
    {
        name, 
        description,
        "type": productType -> name,
        image
    }`
  );
  return {
    props: { product },
    revalidate: 1,
  };
};

export default Product;
