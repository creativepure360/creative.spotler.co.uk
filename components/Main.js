import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Main = ({ children, router }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scroll({top: 0, behavior: 'smooth'});
    }, 250)
  }, [router.route]);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          className="pt-[100px]"
          key={router.route}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Main;
