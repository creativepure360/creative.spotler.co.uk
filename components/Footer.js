const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full h-16">
        <div className="max-w-screen-lg mx-auto py-4 px-12">
          <p className="text-white text-xs">Copyright {currentYear} &bull; <a className="duration-300 hover:text-floss-pink hover:underline" href="https://www.pure360.com/cookies" target="_blank">Cookie Policy</a> &bull; <a className="duration-300 hover:text-floss-pink hover:underline" href="https://www.pure360.com/privacy" target="_blank">Privacy Policy</a> &bull; <a className="duration-300 hover:text-floss-pink hover:underline" href="https://www.pure360.com/licence-agreement" target="_blank">Licence Agreement</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
