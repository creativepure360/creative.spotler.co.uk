import Link from "next/link";
import client from "../../client-config";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Product = ({ product }) => {
  const [{ name, description, type, image, slug }] = product;
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <motion.article className="mb-16" variants={childrenVariants}>
          <span className="text-floss-pink uppercase pb-2 text-lg mb-2">
            {type}
          </span>
          <h1 className="font-avant-garde-bold text-3xl sm:text-5xl leading-10 sm:leading-14 mt-2 mb-4 sm:mb-8">
            {name}
          </h1>
          <div className="mb-8">
            <BlockContent blocks={description} />
          </div>
          <div>
            <a
              href="https://www.pure360.com/contact-us/"
              target="_blank"
              className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-3 mb-6"
            >
              Contact Us
            </a>
          </div>
          <div>
            <Link href={`/products`} scroll={false}>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-3">
                Back To Products
              </a>
            </Link>
          </div>
        </motion.article>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <motion.article
          className="product-example border-gray-50 border-4 rounded-lg p-8 mb-10"
          variants={childrenVariants}
        >
          <img className="w-full mx-auto" style={{filter: "blur(3px)"}}  src={urlFor(image)} />
          <div
            className="absolute z-50"
            style={{ top: "calc(50% - 22px)", left: "calc(50% - 62px)" }}
          >
            <Link href={`/examples/${slug}`} scroll={false}>
              <a className="text-base text-pavilion-purple duration-300 hover:text-white bg-transparent hover:bg-pavilion-purple border-pavilion-purple border-2 inline-block px-8 py-3">
                Preview
              </a>
            </Link>
          </div>
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
        image,
        "slug": slug.current
    }`
  );
  return {
    props: { product },
    revalidate: 1,
  };
};

export default Product;
