import Contact from "../components/Contact";
import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Blog = ({ blogPosts, page }) => {
  const [{ title, copy, image }] = page;
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-[#23afe6]">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
          <motion.article className="col-span-1 sm:col-span-8" variants={childrenVariants}>
            <h1 className="font-greycliff text-white text-[34px] sm:text-[40px] leading-[1.1] font-bold mb-[30px]">{title}</h1>
            <div className="font-opensans text-[18px]leading-6 text-white mb-[30px]">
            <BlockContent blocks={copy} />
            </div>
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-4 hidden sm:block" variants={childrenVariants}>
            <img src={urlFor(image)} />
          </motion.article>
        </section>
      </div>
      <div className="bg-[#e6f6fc]">
        <section className="max-w-[1200px] mx-auto pt-[50px] pb-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] items-center">
          {blogPosts.map(({ id, image, date, title, exerpt, slug }) => (
            <motion.article key={id} className="col-span-1 sm:col-span-4" variants={childrenVariants}>
              <div className="bg-white text-center hover:translate-y-[-10px] transition duration-300">
                <Link href={`/post/${slug}`} scroll={false}>
                  <div className={`w-full bg-center bg-no-repeat bg-cover p-[25%]`} style={{ backgroundImage: `url('${urlFor(image).url()}` }}></div>
                  <div className="text-left p-[30px]">
                    <h3 className="font-greycliff text-[#002a4d] text-[24px] leading-[1.1] font-bold mb-[20px] ">{title}</h3>
                    <span className="block font-greycliff text-[#002a4d] text-[14px] leading-[1] font-normal mb-[20px]">{date}</span>
                    <div className="font-opensans text-[18px] leading-6 text-[#002a4d] mb-[30px]">
                      <BlockContent blocks={exerpt} />
                    </div>
                    <span className="font-opensans text-[18px] leading-[18px] text-[#23afe6] underline">Read more</span>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
      <Contact />
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const page = await client.fetch(
    groq`*[_type == 'page' && _id == 'a27f2d24-c068-43e8-b36b-7a61cc3e77d1']
    {
        title,
        copy,
        image,
    }`
  );
  const blogPosts = await client.fetch(
    groq`*[_type == "post"] | order(name asc) {
      "id": _id,
      image,
      date,
      title,
      exerpt,
      "slug": slug.current,
    }`
  );
  return {
    props: { blogPosts, page },
    revalidate: 1,
  };
};

export default Blog;
