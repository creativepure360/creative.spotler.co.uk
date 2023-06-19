import { useState } from "react";
import groq from "groq";
import client from "../../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import FsLightbox from "fslightbox-react";

const Product = ({ product }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };
  const [{ name, description, image, category, examples }] = product;
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-white">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
          <motion.article className="col-span-1 sm:col-span-8 text-[#002a4d]" variants={childrenVariants}>
            <span className="block font-greycliff text-[#23afe6] text-[16px] leading-[1] mb-[10px]">{category}</span>
            <h1>{name}</h1>
            <BlockContent blocks={description} />
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-4 hidden sm:block" variants={childrenVariants}>
            <img src={urlFor(image)} />
          </motion.article>
        </section>
      </div>
      {examples && examples.length >= 1 && (
        <div className="bg-[#e6f6fc]">
          <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
            <motion.article className="col-span-12 text-[#002a4d]" variants={childrenVariants}>
              <h2 className="mb-0">Our recent projects</h2>
            </motion.article>
            {examples.map((example, index) => {
              const url = urlFor(example).url();
              return (
                <motion.article key={index} className="col-span-11 sm:col-span-3" variants={childrenVariants}>
                  <div className={`bg-top bg-no-repeat bg-cover pt-[100%] cursor-pointer`} style={{ backgroundImage: `url(${url})` }} onClick={() => openLightboxOnSlide(index + 1)} />
                </motion.article>
              );
            })}
            <FsLightbox type="image" toggler={lightboxController.toggler} sources={examples.map((example) => urlFor(example).url())} slide={lightboxController.slide} />
          </section>
        </div>
      )}
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
