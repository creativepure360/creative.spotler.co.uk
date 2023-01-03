import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

import ExitPreview from "../../components/ExitPreview";

const dataCapture = () => {
  const [popoverShown, setPopoverShown] = useState(false);
  const [headline, setHeadline] = useState("Lorem ipsum dolor sit amet");
  const [formShown, setFormShown] = useState(true);

  const handleSubmit = () => {
    setHeadline("Thank you for joining!");
    setFormShown(false);
    setTimeout(() => {
      setPopoverShown(false);
    }, 3000);
  };

  const handleClose = () => {
    setPopoverShown(false);
    setFormShown(false);
  };

  const handleReset = () => {
    setHeadline("Lorem ipsum dolor sit amet");
    setFormShown(true);
    setPopoverShown(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setPopoverShown(true);
    }, 2000);
  }, []);

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        {!popoverShown && !formShown && (
          <article>
            <motion.div
              variants={childrenVariants}
              className="fixed top-0 left-0 w-full h-full flex flex-col flex-wrap justify-center items-center"
            >
              <a
                className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
                onClick={handleReset}
              >
                Show Popover Again?
              </a>
            </motion.div>
          </article>
        )}
        {popoverShown && (
          <article
            className="fixed top-0 left-0 w-full h-full"
            style={{ background: `rgba(0, 0, 0, 0.6)`, zIndex: "9999" }}
          >
            <motion.div
              variants={childrenVariants}
              className="fixed top-0 left-0 w-full h-full flex flex-col flex-wrap justify-center items-center"
              style={{ zIndex: "9999" }}
            >
              <div className="relative w-full max-w-9/10 sm:max-w-2xl mx-auto grid gap-0 sm:gap-8 grid-cols-1 sm:grid-cols-2 bg-white border-gray-50 border-4 rounded-lg p-8">
                <div
                  className="hidden sm:block col-span-1 bg-no-repeat bg-center bg-cover h-96"
                  style={{
                    backgroundImage: `url('https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')`,
                  }}
                ></div>
                <div className="col-span-1 flex flex-col flex-wrap justify-center items-start">
                  <span
                    className="absolute top-2 right-3 cursor-pointer font-opensans"
                    onClick={handleClose}
                  >
                    X
                  </span>
                  <h2 className="font-greycliff text-floss-pink text-3xl leading-10 mb-3">
                    {headline}
                  </h2>
                  {formShown && (
                    <>
                      <p className="mb-5">
                        Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </p>
                      <input
                        className="block w-full border-gray-100 border-4 p-2 mb-5"
                        type="text"
                        placeholder="Enter your email address"
                        value="example@example.com"
                      ></input>
                      <a
                        className="text-base text-white duration-300 hover:text-pavilion-purple bg-pavilion-purple hover:bg-white hover:shadow-full inline-block cursor-pointer mb-4 px-8 py-2"
                        onClick={handleSubmit}
                      >
                        Join Newsletter
                      </a>
                      <p className="text-xs">
                        Aenean commodo ligula eget dolor. Aenean massa.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </article>
        )}
      </section>
      <ExitPreview />
    </motion.div>
  );
};

export default dataCapture;
