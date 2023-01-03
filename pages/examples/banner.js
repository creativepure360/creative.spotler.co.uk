import { useState } from "react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from '../../components/ExitPreview';

const instances = {
  a: {
    bg: "from-[#002a4d] to-[#23afe6]",
    heading: "Lorem ipsum dolor!",
    body:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
    ctaText: "Lorem Ipsum",
    ctaBg: "bg-[#002a4d]",
  },
  b: {
    bg: "from-[#002a4d] to-[#23afe6]",
    heading: "Integer tincidunt!",
    body:
      " Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.",
    ctaText: "Phasellus Viverra",
    ctaBg: "bg-[#002a4d]",
  },
  c: {
    bg: "from-[#002a4d] to-[#23afe6]",
    heading: "Quis gravida magna!",
    body:
      "Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis.",
    ctaText: "Vestibulum Ante",
    ctaBg: "bg-[#002a4d]",
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
            <h2 className="font-greycliff text-white text-3xl sm:text-5xl leading-10 sm:leading-14 mb-4">
              {instances[instance].heading}
            </h2>
            <p className="font-opensans text-white mb-8">
              {instances[instance].body}
            </p>
            <a
              className={`text-base duration-300 text-white ${instances[instance].ctaBg} hover:bg-white hover:text-[#002a4d] inline-block cursor-pointer px-8 py-3`}
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
              className="text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("a")}
            >
              Customer A
            </a>
          </div>
          <div className="block sm:inline mb-4 sm:mx-2">
            <a
              className="text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("b")}
            >
              Customer B
            </a>
          </div>
          <div className="block sm:inline mb-4 sm:mx-2">
            <a
              className="text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block cursor-pointer px-8 py-3"
              onClick={() => setInstance("c")}
            >
              Customer C
            </a>
          </div>
        </motion.article>
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default banner;
