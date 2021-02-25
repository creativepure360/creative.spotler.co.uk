import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const dragAndDrop = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants}></motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default dragAndDrop;
