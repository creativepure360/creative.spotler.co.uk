import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../../variants/variants";

const countdownTimer = () => {
  const router = useRouter();

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const end = new Date("Jan 1, 2022 00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = end - now;
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      if (distance < 999) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const addLeadingZero = (number = 0) => {
    return number.toString().padStart(2, "0");
  };

  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      <section className="max-w-screen-lg mx-auto mb-14 px-4 sm:px-8">
        <motion.article
          variants={childrenVariants}
          className="w-full max-w-9/10 sm:max-w-2xl mx-auto bg-gradient-to-r from-floss-pink to-pavilion-purple rounded-lg p-6 sm:p-16"
        >
          <div className="text-center">
            <h2 className="font-avant-garde-bold text-white text-3xl sm:text-5xl leading-10 sm:leading-14 mb-4 sm:mb-10">
              Lorem ipsum dolor!
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-2 font-proxima-bold text-white text-3xl sm:text-6xl md:7xl leading-8 sm:leading-12">
              <div className="col-span-1">{addLeadingZero(days)}</div>
              <div className="col-span-1">{addLeadingZero(hours)}</div>
              <div className="col-span-1">{addLeadingZero(minutes)}</div>
              <div className="col-span-1">{addLeadingZero(seconds)}</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-6 sm:mb-12 font-proxima-bold text-white text-xs sm:text-base uppercase">
              <div className="col-span-1">Days</div>
              <div className="col-span-1">Hours</div>
              <div className="col-span-1">Minutes</div>
              <div className="col-span-1">Seconds</div>
            </div>
            <a
              className="text-base text-white duration-300 hover:text-pavilion-purple bg-floss-pink
             hover:bg-white hover:shadow-full inline-block cursor-pointer px-8 py-3"
            >
              Shop Now
            </a>
          </div>
        </motion.article>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <motion.article variants={childrenVariants} className="text-center">
          <a
            className="text-base text-pavilion-purple duration-300 hover:text-white bg-white hover:bg-pavilion-purple border-pavilion-purple border-2 inline-block cursor-pointer px-8 py-3"
            onClick={() =>
              router.push(router.pathname.replace("examples", "products"))
            }
          >
            Exit Preview
          </a>
        </motion.article>
      </section>
    </motion.div>
  );
};

export default countdownTimer;
