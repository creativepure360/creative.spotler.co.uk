import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Index = ({ categories }) => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-16 sm:mb-20 px-4 sm:px-8">
        <div className="grid gap-2 sm:gap-10 grid-cols-1 sm:grid-cols-3 mb-8 items-center">
          <motion.div
            variants={childrenVariants}
            className="col-span-1 sm:col-span-2"
          >
            <h1 className="font-avant-garde-bold text-4xl sm:text-6xl leading-10 sm:leading-18 mb-4 sm:mb-8">
              Pure360
              <br />
              <span className="creative block py-1">Creative Space.</span>
            </h1>
            <p className="mb-8">
              Designed as a playground for innovation. Here you'll find all the
              products, tools and updates from the Creative Team at Pure360.
            </p>
            <Link href="/products" scroll={false}>
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-3">
                View Our Products
              </a>
            </Link>
          </motion.div>
          <motion.div
            variants={childrenVariants}
            className="hidden sm:block col-span-1 mx-auto mb-8 sm:mb-0 bg-contain bg-no-repeat bg-center w-full h-full pt-50p sm:pt-100p"
            style={{
              backgroundImage: `url('https://cdn.sanity.io/images/w5xsgj13/production/dac0cbc0b0e47de41467d32a015724ee84c1e4e7-59x50.svg?h=400&fit=max')`,
            }}
          ></motion.div>
        </div>
      </section>
      <section>
        <motion.article variants={childrenVariants} className="highlight bg-pavilion-purple mb-12 px-4 sm:px-8 py-12 sm:py-16">
          <h2 className="font-avant-garde-bold text-floss-pink text-2xl sm:text-4xl leading-8 sm:leading-10 text-center mb-3 mx-auto max-w-2xl">
            We can help you with that.
          </h2>
          <h3 className="font-proxima text-floss-pink sm:font-proxima-bold text-lg text-center leading-6 sm:leading-7 mx-auto max-w-lg mb-12">
            Know which part of your business needs some marketing love? We can
            work with you to target specific areas with our beautiful design and
            technical skills.
          </h3>
        </motion.article>
      </section>
      <section className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8">
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
              <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-3 mt-6">
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
