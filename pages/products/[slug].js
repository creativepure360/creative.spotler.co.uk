import groq from "groq";
import client from "../../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import Link from "next/link";

import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

import { motion } from "framer-motion";

const Product = ({ product }) => {
  const [{ name, description, type, image }] = product;
  return (
    <>
      <Header />
      <Main>
        <section>
          <div className="mb-16">
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
              <span className="text-floss-pink uppercase pb-2 text-lg mb-2">
                {type}
              </span>
              <h1 className="font-avant-garde-bold text-3xl sm:text-5xl leading-10 sm:leading-14 mt-2 mb-4 sm:mb-8">
                {name}
              </h1>
              <div className="mb-2">
                <BlockContent blocks={description} />
              </div>
              <Link href="">
                <a className="text-base text-white hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block px-8 py-2 mt-6">
                  Lorem Ipsum
                </a>
              </Link>
            </motion.div>
          </div>
          <motion.img
            animate={{
              y: 0,
              opacity: 1,
            }}
            initial={{
              y: -10,
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 0.5 }}
            src={urlFor(image)}
          />
        </section>
      </Main>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const products = await client.fetch(
    groq`*[_type == 'product']{"slug": slug.current}`
  );
  const paths = products.map((product) => ({ params: { slug: product.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const product = await client.fetch(
    groq`*[_type == 'product' && slug.current == "${params.slug}"]
    {
        name, 
        description,
        "type": productType -> name,
        image
    }`
  );
  return {
    props: { product },
    revalidate: 1,
  };
};

export default Product;
