import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const custom = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-xl mx-auto mb-32 px-4 sm:px-8">
        <motion.article
          variants={childrenVariants}
          className="border-gray-50 border-4 rounded-lg hidden lg:block"
        >
          <iframe
            className="w-full h-4/5-screen"
            src="https://www.uploadlibrary.com/creativepure360/template-builder/index.html"
          ></iframe>
        </motion.article>
        <motion.article variants={childrenVariants} className="block lg:hidden">
          <video
            width="640"
            controls
            autoplay="true"
            className="mx-auto border-gray-100 border-4"
          >
            <source src="https://www.uploadlibrary.com/creativepure360/Creative/pure360-html-demo.mov" />
            Your browser does not support HTML video.
          </video>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default custom;
