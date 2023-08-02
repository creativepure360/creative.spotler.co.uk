import Link from "next/link";
import { useState } from "react";
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
          <motion.article className="col-span-1 sm:col-span-8 text-[#002a4d]" variants={childrenVariants}>
            <p className="inline-block mb-[30px] text-[#002a4d]">
              <Link className="text-[#23afe6]" href={`/`} scroll={false}>
                {category}
              </Link>
              <svg className="fill-[#23afe6] w-[8px] inline mx-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
              {name}
            </p>
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
                  <a data-fslightbox data-type="image" data-caption={`<a class="font-opensans text-[14px] sm:text-[18px] leading-[22.4px] sm:leading-[28.8px] font-bold text-[#002a4d] bg-[#f3e400] hover:bg-[#002a4d] hover:text-[#23afe6] rounded-3xl inline-block select-none px-[15px] sm:px-[25px] py-[6px] sm:py-[9px] duration-300 ease-in-out" href="mailto:accountmanagers@spotler.co.uk?cc=creative@spotler.co.uk&subject=Creative%20services%20enquiry&body=Product%3A%20${url}">I like this one!</a>`} href={url}>
                    <div className={`bg-top bg-no-repeat bg-cover pt-[100%] cursor-pointer`} style={{ backgroundImage: `url(${url})` }} />
                  </a>
                </motion.article>
              );
            })}
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
