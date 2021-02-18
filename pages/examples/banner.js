import { useState } from "react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from '../../components/ExitPreview';

const instances = {
  a: {
    bg: "from-floss-pink to-pavilion-purple",
    heading: "Lorem ipsum dolor!",
    body:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
    ctaText: "Lorem Ipsum",
    ctaBg: "hover:text-pavilion-purple bg-floss-pink",
  },
  b: {
    bg: "from-lanes-red to-ron-burgundy",
    heading: "Integer tincidunt!",
    body:
      " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.",
    ctaText: "Phasellus Viverra",
    ctaBg: "hover:text-ron-burguncy bg-lanes-red",
  },
  c: {
    bg: "from-sunrise-yellow to-sunset-red",
    heading: "Quis gravida magna!",
    body:
      "Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis.",
    ctaText: "Vestibulum Ante",
    ctaBg: "hover:text-sunset-red bg-sunrise-yellow",
  },
};

const banner = () => {
  const [instance, setInstance] = useState("a");

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-14 px-4 sm:px-8">
        <motion.article
          variants={childrenVariants}
          className={`w-full max-w-9/10 sm:max-w-2xl mx-auto bg-gradient-to-r ${instances[instance].bg} rounded-lg p-6 sm:p-16`}
        >
          <div className="text-center">
            <h2 className="font-avant-garde-bold text-white text-3xl sm:text-5xl leading-10 sm:leading-14 mb-4">
              {instances[instance].heading}
            </h2>
            <p className="font-proxima text-white mb-8">
              {instances[instance].body}
            </p>
            <a
              className={`text-base duration-300 text-white ${instances[instance].ctaBg} hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3`}
            >
              {instances[instance].ctaText}
            </a>
          </div>
        </motion.article>
      </section>
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants} className="text-center">
          <div className="block sm:inline mb-4 sm:mx-2">
            <a
              className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("a")}
            >
              Instance A
            </a>
          </div>
          <div className="block sm:inline mb-4 sm:mx-2">
            <a
              className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("b")}
            >
              Instance B
            </a>
          </div>
          <div className="block sm:inline mb-4 sm:mx-2">
            <a
              className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("c")}
            >
              Instance C
            </a>
          </div>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default banner;
