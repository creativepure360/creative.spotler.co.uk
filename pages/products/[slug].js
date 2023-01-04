import Link from "next/link";
import client from "../../client-config";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const Product = ({ product }) => {
  const [{ name, description, type, image, examples, slug }] = product;
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <motion.article className="mb-16" variants={childrenVariants}>
          <span className="text-[#002a4d] uppercase pb-2 text-lg mb-2">{type}</span>
          <h1 className="font-greycliff text-3xl sm:text-5xl leading-10 sm:leading-14 mt-2 mb-4 sm:mb-8">{name}</h1>
          <div className="mb-8">
            <div className="font-opensans">
              <BlockContent blocks={description} />
            </div>
          </div>
          <div>
            <a href="https://www.pure360.com/contact-us/" target="_blank" className="font-opensans font-bold text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block px-8 py-3 mb-6">
              Contact Us
            </a>
          </div>
          <div>
            <Link className="font-opensans font-bold text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block px-8 py-3" href={`/products`} scroll={false}>
              Back To Products
            </Link>
          </div>
        </motion.article>
      </section>
      {examples && (
        <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
          <motion.article variants={childrenVariants} className="mx-2 mb-4">
            <h2 className="font-greycliff text-3xl sm:text-4xl mb-3 mx-auto leading-10">Our Work</h2>
          </motion.article>
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="grid grid-cols-2 lg:grid-cols-3 border-gray-50 border-4 rounded-lg p-2 mb-12">
                {examples.map((example, key) => (
                  <motion.article variants={childrenVariants} key={key} className="col-span-1 m-4">
                    <img class="w-full cursor-pointer" src={urlFor(example)} />
                  </motion.article>
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </section>
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
        "type": productType -> name,
        image,
        examples,
        "slug": slug.current
    }`
  );
  return {
    props: { product },
    revalidate: 1,
  };
};

export default Product;
