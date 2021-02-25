import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const dragAndDrop = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants}>
          <video width="640" controls autoplay="true" className="mx-auto border-gray-100 border-4">
            <source src="https://www.uploadlibrary.com/creativepure360/Creative/pure360-drag-and-drop-demo.mov" />
            Your browser does not support HTML video.
          </video>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default dragAndDrop;
