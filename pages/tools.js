import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const tools = [
  {
    image: "https://cdn.sanity.io/images/tgvb7jy1/production/10d4d7a33813a3d6a5039709abc0ffd3400c4904-300x300.png",
    name: "Template Builder",
    description: "Rapidly build a stunning and effective email campaign from your custom template in seconds",
    link: "https://www.uploadlibrary.com/creativepure360/template-builder/index.html",
  },
  {
    image: "https://cdn.sanity.io/images/tgvb7jy1/production/be2290b59c53150d502cb74df64c1d3dcc089c2b-300x300.png",
    name: "Form Builder",
    description: "Create simple contact forms or complex surveys with our easy-to-use form builder",
    link: "https://www.uploadlibrary.com/creativepure360/formbuilder/index.html",
  },
];

const Tools = ({ page }) => {
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
            <img src={urlFor(image)} />
          </motion.article>
        </section>
      </div>
      <div className="bg-[#e6f6fc]">
        <section className="max-w-[1200px] mx-auto pt-[50px] pb-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] items-center">
          {tools.map(({ image, name, description, link }) => (
            <motion.article className="col-span-1 sm:col-span-6 h-full" variants={childrenVariants}>
              <Link href={link} target="_blank" scroll={false}>
                <div className="bg-white p-[30px] text-[#002a4d] text-center hover:translate-y-[-10px] transition duration-300 h-full">
                  <img className="mx-auto max-w-[150px] mb-[15px]" src={image} />
                  <h3>{name}</h3>
                  <p>{description}</p>
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
    groq`*[_type == 'page' && _id == '62a811d1-74e9-496c-b113-3957452929c0']
    {
        title,
        copy,
        image,
    }`
  );
  return {
    props: { page },
    revalidate: 1,
  };
};

export default Tools;
