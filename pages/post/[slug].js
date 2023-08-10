import Link from "next/link";
import groq from "groq";
import client from "../../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion, useScroll } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Post = ({ post }) => {
  const { scrollYProgress } = useScroll();
  const [{ image, date, title, copy, platform }] = post;
  return (
    <>
      <motion.div className="fixed top-[100px] left-0 right-0 h-[10px] bg-[#23afe6] origin-[0%]" style={{ scaleX: scrollYProgress }} />
      <motion.div initial="hidden" animate="visible" variants={parentVariants}>
        <div className="bg-[#e6f6fc]">
          <section className="max-w-[1200px] mx-auto py-[50px] px-[30px]">
            <motion.article variants={childrenVariants}>
              <p className="inline-block mb-[30px] text-[#002a4d]">
                <Link className="text-[#23afe6]" href={`/blog`} scroll={false}>
                  Blog
                </Link>
                <svg className="fill-[#23afe6] w-[8px] inline mx-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
                {title}
              </p>
            </motion.article>
            <motion.article variants={childrenVariants}>
              <div className={`w-full bg-center bg-no-repeat bg-cover p-[25%] mb-[40px]`} style={{ backgroundImage: `url('${urlFor(image).url()}` }}></div>
            </motion.article>
            <motion.article className="post" variants={childrenVariants}>
              <span className="bg-[#23afe6] text-[14px] text-white py-[5px] px-[15px] rounded-[25px] inline-block mb-[10px] select-none">{platform[0].name}</span>
              <h1 className="text-[#002a4d]">{title}</h1>
              <span className="block text-[14px] leading-[1] text-[#002a4d] mb-[30px]">{date}</span>
              <BlockContent blocks={copy} />
            </motion.article>
            <motion.article className="text-center pt-[50px]" variants={childrenVariants}>
              <Link className="font-opensans text-[18px] leading-[28.8px] font-bold duration-300 ease-in-out text-white hover:text-[#23afe6] bg-[#23afe6] hover:bg-white rounded-3xl inline-block select-none px-[25px] py-[9px]" href="/blog" scroll={false}>
                Read more posts
              </Link>
            </motion.article>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export const getStaticPaths = async () => {
  const post = await client.fetch(groq`*[_type == 'post']{"slug": slug.current}`);
  const paths = post.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = await client.fetch(
    groq`*[_type == 'post' && slug.current == "${params.slug}"]
    {
        date,
        image, 
        title,
        copy[]{
          ..., 
          asset->{
            ...,
            "_key": _id
          },
        },
        platform[] -> {name}
    }`
  );
  return {
    props: { post },
    revalidate: 1,
  };
};

export default Post;
