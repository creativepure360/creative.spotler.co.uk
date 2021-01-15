import { AnimateSharedLayout } from "framer-motion";

import "../styles/styles.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
};

export default App;
