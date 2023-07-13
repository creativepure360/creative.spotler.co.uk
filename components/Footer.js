import Link from "next/link";
import { motion } from "framer-motion";
import { childrenVariants } from "../variants/variants";

const date = new Date();

const Footer = () => {
  return (
    <>
      <footer>
        <div className="fixed bottom-[30px] right-[30px]">
          <Link href="mailto:creative-pure360@spotler.co.uk?subject=Creative%20homepage%20comments%2Fsuggestions" scroll={false}>
            <svg className="w-[40px] sm:w-[50px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#5cd975">
              <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
          </Link>
        </div>
        <div className="bg-[#f3e400]">
          <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] text-center">
            <motion.article variants={childrenVariants}>
              <h2 className="font-greycliff text-[#002a4d] mb-[30px]">Get in touch</h2>
              <p className="font-opensans text-[18px]leading-6 text-[#002a4d] mb-[30px]">Need our help in making your creative ideas come to life? If you have any questions or comments please let us know.</p>
              <Link className="font-opensans text-[18px] leading-[28.8px] font-bold duration-300 ease-in-out text-white hover:text-[#002a4d] bg-[#002a4d] hover:bg-white rounded-3xl inline-block select-none px-[25px] py-[9px]" href="mailto:accountmanagers@spotler.co.uk?cc=creative-pure360@spotler.co.uk&subject=Creative%20services%20enquiry" scroll={false}>
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
