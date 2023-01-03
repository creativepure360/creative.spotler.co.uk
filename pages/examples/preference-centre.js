import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ExitPreview from "../../components/ExitPreview";

const preferenceCentre = () => {
  const notify = () =>
    toast("Your preferences have been saved! 👍", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "",
      bodyClassName: "text-[#002a4d]",
      progressClassName: "",
    });

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-32 px-4 sm:px-8">
        <motion.article variants={childrenVariants}>
          <h2 className="font-greycliff text-[#002a4d] text-2xl sm:text-4xl leading-8 sm:leading-10 mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mb-6">
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
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
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-6">
            <div className="col-span-1">
              <label className="block">
                First Name
                <input
                  className="w-full border-gray-100 border-4 p-2 mb-0 sm:mb-5"
                  type="text"
                  placeholder="Enter your first name"
                  value="John"
                ></input>
              </label>
            </div>
            <div className="col-span-1">
              <label className="block">
                Last Name
                <input
                  className="w-full border-gray-100 border-4 p-2 mb-5"
                  type="text"
                  placeholder="Enter your last name"
                  value="Smith"
                ></input>
              </label>
            </div>
          </div>
          <div className="grid gap-0 grid-cols-1 mb-8">
            <div className="col-span-1">
              <h2 className="font-greycliff text-[#002a4d] text-xl sm:text-3xl leading-6 sm:leading-8 mb-6 max-w-2xl">
                Maecenas nec odio
              </h2>
              <p className="mb-6">
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              </p>
              <div className="relative block w-10align-middle select-none transition duration-300 ease-in mr-2 mb-3">
                <label>
                  <input
                    className="toggle relative w-10 h-5 transition-all duration-300 ease-in-out bg-gray-100 rounded-full shadow-inner outline-none appearance-none"
                    type="checkbox"
                  />
                  <span className="absolute ml-4" style={{ top: "-3px" }}>
                    Cum sociis natoque penatibus
                  </span>
                </label>
              </div>
              <div className="relative block w-10align-middle select-none transition duration-300 ease-in mr-2 mb-3">
                <label>
                  <input
                    className="toggle relative w-10 h-5 transition-all duration-300 ease-in-out bg-gray-100 rounded-full shadow-inner outline-none appearance-none"
                    type="checkbox"
                  />
                  <span className="absolute ml-4" style={{ top: "-3px" }}>
                    Donec quam felis
                  </span>
                </label>
              </div>
              <div className="relative block w-10align-middle select-none transition duration-300 ease-in mr-2 mb-3">
                <label>
                  <input
                    className="toggle relative w-10 h-5 transition-all duration-300 ease-in-out bg-gray-100 rounded-full shadow-inner outline-none appearance-none"
                    type="checkbox"
                  />
                  <span className="absolute ml-4" style={{ top: "-3px" }}>
                    Donec pede
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="grid gap-0 grid-cols-1">
            <div className="col-span-1">
              <a
                className="font-opensans font-bold text-base text-white duration-300 bg-[#002a4d] hover:bg-white hover:text-[#002a4d] rounded-3xl border border-[#002a4d] inline-block cursor-pointer px-8 py-3"
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

export default preferenceCentre;
