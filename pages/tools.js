import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Tools = ({tools}) => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-8 px-4 sm:px-8">
        <motion.article variants={childrenVariants}>
          <h1 className="font-avant-garde-bold text-4xl sm:text-5xl leading-12 sm:leading-14 mb-4 sm:mb-8">
            Tools
          </h1>
          <p className="font-proxima">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium.
          </p>
        </motion.article>
      </section>
      <section>
        <motion.article
          variants={childrenVariants}
          className="highlight bg-pavilion-purple mb-12 px-4 sm:px-8 py-12 sm:py-16"
        >
          <h2 className="font-avant-garde-bold text-floss-pink text-2xl sm:text-4xl leading-8 sm:leading-10 text-center mb-3 mx-auto max-w-2xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <h3 className="font-proxima text-floss-pink sm:font-proxima-bold text-lg text-center leading-6 sm:leading-7 mx-auto max-w-lg mb-12">
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </h3>
        </motion.article>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {tools.map(({ id, name, exerpt, url }) => (
            <motion.article
              variants={childrenVariants}
              key={id}
              className="border-gray-50 border-4 rounded-lg p-8 m-2"
            >
              <h3 className="font-avant-garde-bold text-2xl mb-3">{name}</h3>
              <BlockContent blocks={exerpt} />
              <a
                href={url}
                target="_blank"
                className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block px-8 py-3 mt-6"
              >
                Open tool
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const tools = await client.fetch(
    groq`*[_type == 'tool']
    {
      "id": _id,
      name, 
      exerpt,
      url
    }`
  );
  return {
    props: { tools },
    revalidate: 1,
  };
};

export default Tools;
