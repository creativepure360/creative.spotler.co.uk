import client from "../client-config";
import groq from "groq";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Heading from "../components/main/Heading"
import Highlight from "../components/main/Highlight"
import Categories from "../components/main/Categories";
import Footer from "../components/footer/Footer";

const Index = ({ categories }) => {
  return (
    <>
      <Header />
      <Main>
        <Heading />
        <Highlight />
        <Categories categories={categories} />
      </Main>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const categories = await client.fetch(
    groq`*[_type == 'category'] | order(title) {
      "id": _id,
      title,
      exerpt,
      "slug": slug.current
    }`
  );
  return {
    props: { categories },
    revalidate: 1,
  };
};

export default Index;
