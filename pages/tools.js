import Contact from "../components/Contact";
import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Tools = ({ page }) => {
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
          <motion.article className="col-span-1 sm:col-span-6" variants={childrenVariants}>
            <Link href="https://www.uploadlibrary.com/creativepure360/template-builder/index.html" target="_blank" scroll={false}>
              <div className="bg-white p-[30px] text-center hover:translate-y-[-10px] transition duration-300">
                <img className="mx-auto max-w-[150px] mb-[15px]" src="https://cdn.sanity.io/images/tgvb7jy1/production/83b774b387e77e76b8cc16674843d207d4fd89d7-300x300.webp" />
                <h3 className="font-greycliff text-[#002a4d] text-[24px] leading-[1.1] font-bold mb-[10px]">Template Builder</h3>
                <div className="font-opensans text-[18px] leading-6 text-[#002a4d] mb-[30px]">Rapidly build a stunning and effective email campaign from your custom template in minutes</div>
              </div>
            </Link>
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-6" variants={childrenVariants}>
            <Link href="https://www.uploadlibrary.com/creativepure360/formbuilder/index.html" target="_blank" scroll={false}>
              <div className="bg-white p-[30px] text-center hover:translate-y-[-10px] transition duration-300">
                <img className="mx-auto max-w-[150px] mb-[15px]" src="https://cdn.sanity.io/images/tgvb7jy1/production/83b774b387e77e76b8cc16674843d207d4fd89d7-300x300.webp" />
                <h3 className="font-greycliff text-[#002a4d] text-[24px] leading-[1.1] font-bold mb-[10px]">Form Builder</h3>
                <div className="font-opensans text-[18px] leading-6 text-[#002a4d] mb-[30px]">Create simple contact forms or complex surveys with our easy-to-use form builder</div>
              </div>
            </Link>
          </motion.article>
        </section>
      </div>
      <Contact />
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
