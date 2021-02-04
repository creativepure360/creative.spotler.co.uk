import { motion } from "framer-motion";

const Highlight = () => {
  return (
    <motion.section
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{
        y: -10,
        opacity: 0,
      }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mb-12"
    >
      <h2 className="font-avant-garde-bold text-3xl sm:text-4xl text-center mb-3 mx-auto leading-10 max-w-2xl">
        Lorem ipsum dolor sit amet.
      </h2>
      <h3 className="font-proxima sm:font-proxima-bold text-lg sm:text-xl text-center leading-6 mx-auto max-w-lg">
        Mauris pretium magna lectus, id placerat metus sollicitudin id. Interdum
        et malesuada fames ac ante.
      </h3>
    </motion.section>
  );
};

export default Highlight;
