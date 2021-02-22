import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const custom = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants} className="border-gray-50 border-4 rounded-lg">
          <iframe className="w-full h-screen" src="https://www.uploadlibrary.com/creativepure360/customer-templates/index.html?customName=Pure%20360&profileName=creativepure360&templateID=b9c84d06-df5f-4c4c-83a2-0d646119c881"></iframe>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default custom;
