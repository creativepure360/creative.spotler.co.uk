const date = new Date();

const Footer = () => {
  return (
    <>
      <footer className="bg-[#001d34]">
        <nav className="text-white text-xs h-[100px] flex items-center justify-center py-[30px] px-[30px]">
          Copyright {date.getFullYear()} Spotler&nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://spotler.com/cookies" target="_blank">
            Cookie Policy
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
