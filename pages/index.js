import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Index = ({ products, page }) => {
  const [{ title, copy, image }] = page;
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-[#23afe6]">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
          <motion.article className="col-span-1 sm:col-span-8 text-white" variants={childrenVariants}>
            <h1>{title}</h1>
            <BlockContent blocks={copy} />
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-4 hidden sm:block" variants={childrenVariants}>
            <img className="select-none" src={urlFor(image)} />
          </motion.article>
        </section>
      </div>
      <div className="bg-[#e6f6fc]">
        <section className="max-w-[1200px] mx-auto pt-[50px] px-[30px]">
          <motion.article className="col-span-12 text-[#002a4d] text-center" variants={childrenVariants}>
            <h2>Our services</h2>
          </motion.article>
        </section>
        <section className="max-w-[1200px] mx-auto pb-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] items-center">
          {products.map(({ id, name, exerpt, image, slug }) => (
            <motion.article key={id} className="col-span-1 sm:col-span-6 h-full" variants={childrenVariants}>
              <Link href={`/product/${slug}`} scroll={false}>
                <div className="bg-white p-[30px] text-[#002a4d] text-center hover:translate-y-[-10px] transition duration-300 h-full">
                  <img className="mx-auto max-w-[150px] mb-[15px]" src={urlFor(image)} />
                  <h3>{name}</h3>
                  <BlockContent blocks={exerpt} />
                </div>
              </Link>
            </motion.article>
          ))}
        </section>
      </div>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const page = await client.fetch(
    groq`*[_type == 'page' && _id == 'f7a5a142-e664-421d-bdb8-05dd2fcdadaf']
    {
        title,
        copy,
        image,
    }`
  );
  const products = await client.fetch(
    groq`*[_type == "product"] | order(name asc) {
      "id": _id,
      image,
      name, 
      exerpt,
      "slug": slug.current,
    }`
  );
  return {
    props: { products, page },
    revalidate: 1,
  };
};

export default Index;
