import Link from "next/link";
import { motion } from "framer-motion";
import { childrenVariants } from "../variants/variants";

const date = new Date();

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#f3e400]">
          <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] text-center">
            <motion.article variants={childrenVariants}>
              <h2 className="font-greycliff text-[#002a4d] mb-[30px]">Get in touch</h2>
              <p className="font-opensans text-[18px]leading-6 text-[#002a4d] mb-[30px]">Need our help in making your creative ideas come to life? If you have any questions or comments please let us know.</p>
              <Link className="font-opensans text-[18px] leading-[28.8px] font-bold duration-300 ease-in-out text-white hover:text-[#002a4d] bg-[#002a4d] hover:bg-white rounded-3xl inline-block select-none px-[25px] py-[9px]" href="mailto:accountmanagers@spotler.co.uk?cc=creative@spotler.co.uk&subject=Creative%20services%20enquiry" scroll={false}>
                Contact us
              </Link>
            </motion.article>
          </section>
        </div>
        <div className="bg-[#001d34]">
          <nav className="font-opensans text-white text-xs h-[100px] flex items-center justify-center py-[30px] px-[30px]">
            <ul className="w-full max-w-[250px] flex items-center justify-evenly">
              <li>Copyright {date.getFullYear()} Spotler</li>
              <li>|</li>
              <li><Link href="https://spotler.co.uk/privacy-policy" target="_blank">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
