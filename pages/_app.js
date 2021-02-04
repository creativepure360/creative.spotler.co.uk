import "../styles/styles.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Header />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
};

export default App;
