import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Products = ({ productGroups }) => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="mb-20">
        <motion.article variants={childrenVariants}>
          <h1 className="font-avant-garde-bold text-4xl sm:text-5xl leading-12 sm:leading-14 mb-4 sm:mb-8">
            Creative Solutions
          </h1>
          <p className="font-proxima mb-4">
            We have years of experience designing solutions for every imaginable
            scenario. Want to take your new campaign to the next level? We have
            a solution for that. Need a way to gather data for personalisation?
            We have a solution for that.
          </p>
          <p className="font-avant-garde-bold">
            But don't just take our word for it. Take a look at the examples
            here, and get in touch for a custom solution of your own.
          </p>
        </motion.article>
      </section>
      {productGroups.map(({ id, productType, description, products }) => {
        return (
          <section key={id}>
            <motion.article variants={childrenVariants} className="mx-2 mb-4">
              <h2 className="font-avant-garde-bold text-3xl sm:text-4xl mb-3 mx-auto leading-10">
                {productType}
              </h2>
              <BlockContent blocks={description} />
            </motion.article>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
              {products.map(({ id, name, exerpt, type, slug }) => (
                <motion.article
                  variants={childrenVariants}
                  key={id}
                  className="border-gray-50 border-4 rounded-lg p-8 m-2"
                >
                  <span className="text-floss-pink uppercase pb-2 text-xs mb-2">
                    {type}
                  </span>
                  <h3 className="font-avant-garde-bold text-2xl mb-3">
                    {name}
                  </h3>
                  <BlockContent blocks={exerpt} />
                  <Link href={`/products/${slug}`} scroll={false}>
                    <a className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                      Learn more
                    </a>
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        );
      })}
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const productGroups = await client.fetch(
    groq`*[_type == "productType"] | order(name desc) {
      "id": _id,
      "productType": name,
      description,
      "products": *[_type == "product" && references(^._id)] {
            "id": _id,
            name, 
            exerpt,
            "slug": slug.current,
        }
    }`
  );
  return {
    props: { productGroups },
    revalidate: 1,
  };
};

export default Products;
