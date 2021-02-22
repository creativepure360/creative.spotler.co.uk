import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ExitPreview from "../../components/ExitPreview";

const signUpForm = () => {
  const notify = () =>
    toast("You've been successfully signed up! 👍", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "",
      bodyClassName: "text-pavilion-purple",
      progressClassName: "",
    });

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants}>
          <h2 className="font-avant-garde-bold text-pavilion-purple text-2xl sm:text-4xl leading-8 sm:leading-10 mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mb-6">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="grid gap-0 grid-cols-1">
            <div className="col-span-1">
              <label className="block">
                Email Address
                <input
                  className="w-full border-gray-100 border-4 p-2 mb-5"
                  type="text"
                  placeholder="Enter your email address"
                  value="example@example.com"
                ></input>
              </label>
            </div>
          </div>
          <div className="grid gap-0 grid-cols-1">
            <div className="col-span-1">
              <a
                className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
                onClick={notify}
              >
                Submit
              </a>
            </div>
          </div>
        </motion.article>
      </section>
      <ExitPreview />
      <ToastContainer />
    </motion.div>
  );
};

export default signUpForm;
