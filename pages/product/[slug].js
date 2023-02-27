import Contact from "../../components/Contact";
import groq from "groq";
import client from "../../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Product = ({ product }) => {
  const [{ name, description, image, category, examples }] = product;
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-white">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
          <motion.article className="col-span-1 sm:col-span-8" variants={childrenVariants}>
            <span className="block font-greycliff text-[#23afe6] text-[16px] leading-[1] font-normal mb-[10px]">{category}</span>
            <h1 className="font-greycliff text-[#002a4d] text-[34px] sm:text-[40px] leading-[1.1] font-bold mb-[30px]">{name}</h1>
            <BlockContent className="font-opensans text-[18px]leading-6 text-[#002a4d] mb-[30px]" blocks={description} />
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-4 hidden sm:block" variants={childrenVariants}>
            <img src={urlFor(image)} />
          </motion.article>
        </section>
      </div>
      {examples && examples.length >= 1 && (
        <div className="bg-white">
          <section className="max-w-[1200px] mx-auto py-[50px] px-[30px]">
            <motion.article variants={childrenVariants}>
              <h2 className="font-greycliff text-[#002a4d] text-[30px] sm:text-[36px] leading-[1.1] font-bold mb-[30px]">Examples</h2>
            </motion.article>
          </section>
        </div>
      )}
      <Contact />
    </motion.div>
  );
};

export const getStaticPaths = async () => {
  const products = await client.fetch(groq`*[_type == 'product']{"slug": slug.current}`);
  const paths = products.map((product) => ({ params: { slug: product.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == "${params.slug}"]
    {
        name, 
        description,
        image,
        "category": *[_type == 'category' && references(^._id)][0].name,
        examples
    }`
  );
  return {
    props: { product },
    revalidate: 1,
  };
};

export default Product;
