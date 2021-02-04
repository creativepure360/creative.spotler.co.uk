import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

import { motion } from "framer-motion";

const Products = ({ productGroups }) => {
  return (
    <>
      <Header />
      <Main>
        <section className="mb-20">
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: -10,
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
          >
            <h1 className="font-avant-garde-bold text-4xl sm:text-5xl leading-12 sm:leading-14 mb-4 sm:mb-8">
              Lorem Ipsum Dolor
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </motion.div>
        </section>
        <section>
          {productGroups.map(({ id, productType, description, products }) => {
            return (
              <div key={id}>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{
                    y: -10,
                    opacity: 0,
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mx-2 mb-4"
                >
                  <h2 className="font-avant-garde-bold text-3xl sm:text-4xl mb-3 mx-auto leading-10">
                    {productType}
                  </h2>
                  <BlockContent blocks={description} />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                  {products.map(({ id, name, exerpt, type, slug }, index) => (
                    <motion.article
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      initial={{
                        y: -10,
                        opacity: 0,
                      }}
                      transition={{ duration: 1, delay: 1 + index * 0.15 }}
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
                      <Link href={`/products/${slug}`}>
                        <a className="text-base text-white hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                          Learn more
                        </a>
                      </Link>
                    </motion.article>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </Main>
      <Footer />
    </>
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
