import Script from "next/script";
import Head from "next/head";
import "../styles/styles.css";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>Spotler Creative Playground</title>
        <meta name="description" content="Find a broad array of projects we've completed, blog containing how-to guides and useful tips in using our email editors, and tools we've developed to help you with your email marketing." />
        <meta property="og:title" content="Spotler Creative Playground" />
        <meta property="og:description" content="Find a broad array of projects we've completed, blog containing how-to guides and useful tips in using our email editors, and tools we've developed to help you with your email marketing." />
        <meta property="og:url" content="https://creative.spotler.co.uk/" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
      <Footer />
      <Script src="/js/fslightbox.js" strategy="beforeInteractive" />
    </>
  );
};

export default App;
