const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-black w-full h-12">
        <div className="max-w-screen-lg mx-auto py-4 px-12">
          <p className="text-white text-xs">Copyright {currentYear}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
