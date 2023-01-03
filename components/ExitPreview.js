import { useRouter } from "next/router";
import { motion } from "framer-motion";

const ExitPreview = () => {
  const router = useRouter();
  return (
    <section>
      <article className="fixed bottom-0 w-full bg-[#002a4d] py-8 flex justify-center">
        <a
          className="text-base text-white duration-300 bg-[#002a4d] hover:bg-white border-white border-2 inline-block cursor-pointer px-8 py-3"
          onClick={() =>
            router.push(router.pathname.replace("examples", "products"))
          }
        >
          Exit Preview
        </a>
      </article>
    </section>
  );
};

export default ExitPreview;
