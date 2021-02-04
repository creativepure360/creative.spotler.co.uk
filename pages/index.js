import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Index = ({ categories }) => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="mb-16">
        <div className="grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-3 mb-8 items-center">
          <motion.div
            variants={childrenVariants}
            className="col-span-1 sm:col-span-2"
          >
            <h1 className="font-avant-garde-bold text-4xl sm:text-5xl leading-12 sm:leading-14 mb-4 sm:mb-8">
              Lorem
              <br />
              Ipsum Dolor.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <Link href="/" scroll={false}>
              <a className="text-base text-white hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                Lorem Ipsum
              </a>
            </Link>
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className="hidden sm:block col-span-1 mx-auto mb-8 sm:mb-0 bg-contain bg-no-repeat bg-center w-full h-full pt-50p sm:pt-100p"
            style={{
              backgroundImage: `url('https://cdn.sanity.io/images/w5xsgj13/production/0ea1fdb6d5764564c88a399f376a6e3d36513ec9-84x65.svg`,
            }}
          ></motion.div>
        </div>
      </section>
      <motion.section variants={childrenVariants} className="mb-12">
        <h2 className="font-avant-garde-bold text-3xl sm:text-4xl text-center mb-3 mx-auto leading-10 max-w-2xl">
          Lorem ipsum dolor sit amet.
        </h2>
        <h3 className="font-proxima sm:font-proxima-bold text-lg sm:text-xl text-center leading-6 mx-auto max-w-lg">
          Mauris pretium magna lectus, id placerat metus sollicitudin id.
          Interdum et malesuada fames ac ante.
        </h3>
      </motion.section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ id, title, exerpt, slug }) => (
          <motion.article
            variants={childrenVariants}
            key={id}
            className="border-gray-50 border-4 rounded-lg p-8 m-2"
          >
            <h3 className="font-avant-garde-bold text-2xl sm:text-3xl mb-3">
              {title}
            </h3>
            <BlockContent blocks={exerpt} />
            <Link href={`/categories/${slug}`} scroll={false}>
              <a className="text-base text-white hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                Learn more
              </a>
            </Link>
          </motion.article>
        ))}
      </section>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const categories = await client.fetch(
    groq`*[_type == 'category'] | order(title) {
      "id": _id,
      title,
      exerpt,
      "slug": slug.current
    }`
  );
  return {
    props: { categories },
    revalidate: 1,
  };
};

export default Index;
