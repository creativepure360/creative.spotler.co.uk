const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full h-24 sm:h-16 flex items-center">
        <div className="max-w-screen-lg px-12 flex flex-col sm:flex-row">
          <img
            className="w-16 mr-5 mb-3 sm:mb-0"
            src="https://cdn.sanity.io/images/w5xsgj13/production/a284ebb75d0eeb697e04fe22ce1caafea00966cb-327x63.svg"
            alt="logo"
          />
          <p className="text-white text-xs">
            Copyright {currentYear} &bull;{" "}
            <a
              className="duration-300 hover:text-[#002a4d] hover:underline"
              href="https://www.pure360.com/cookies"
              target="_blank"
            >
              Cookie Policy
            </a>{" "}
            &bull;{" "}
            <a
              className="duration-300 hover:text-[#002a4d] hover:underline"
              href="https://www.pure360.com/privacy"
              target="_blank"
            >
              Privacy Policy
            </a>{" "}
            &bull;{" "}
            <a
              className="duration-300 hover:text-[#002a4d] hover:underline"
              href="https://www.pure360.com/licence-agreement"
              target="_blank"
            >
              Licence Agreement
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
