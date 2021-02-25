import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const custom = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-8">
        <motion.article
          variants={childrenVariants}
          className="border-gray-50 border-4 rounded-lg hidden sm:block"
        >
          <iframe
            className="w-full h-4/5-screen"
            src="https://www.uploadlibrary.com/creativepure360/customer-templates/index.html?customName=Pure360&profileName=creativepure360&templateID=demo"
          ></iframe>
        </motion.article>
        <motion.article variants={childrenVariants} className="block sm:hidden">
          <h2 className="font-avant-garde-bold text-2xl sm:text-4xl leading-8 sm:leading-10 text-center mb-3 mx-auto max-w-2xl">
            Not available on mobile. Please view on Desktop.
          </h2>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default custom;
