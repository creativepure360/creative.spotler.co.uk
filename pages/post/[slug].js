import Contact from "../../components/Contact";
import Link from "next/link";
import groq from "groq";
import client from "../../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const Post = ({ post }) => {
  const [{ image, date, title, copy }] = post;
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-white">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px]">
          <motion.article variants={childrenVariants}>
            <p className="inline-block mb-[30px]">
              <Link className="text-[#23afe6] mr-[5px]" href={`/blog`} scroll={false}>
                Blog
              </Link>
              / {title}
            </p>
          </motion.article>
          <motion.article variants={childrenVariants}>
            <div className={`w-full bg-center bg-no-repeat bg-cover p-[25%] mb-[40px]`} style={{ backgroundImage: `url('${urlFor(image).url()}` }}></div>
          </motion.article>
          <motion.article variants={childrenVariants}>
            <h1 className="text-[#002a4d]">{title}</h1>
            <span className="block font-greycliff text-[14px] leading-[1] text-[#002a4d] mb-[30px]">{date}</span>
            <BlockContent blocks={copy} />
          </motion.article>
        </section>
      </div>
      <Contact />
    </motion.div>
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
        copy,
    }`
  );
  return {
    props: { post },
    revalidate: 1,
  };
};

export default Post;
