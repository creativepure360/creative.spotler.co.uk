import client from "../../client-config";
import groq from "groq";

import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import CategoryDescription from "../../components/main/CategoryDescription";
import CategoryProducts from "../../components/main/CategoryProducts";
import Footer from "../../components/footer/Footer";

const Category = ({ category }) => {
  return (
    <>
      <Header />
      <Main>
        <CategoryDescription category={category} />
        <CategoryProducts category={category} />
      </Main>
      <Footer />
    </>
  );
};

export const getStaticPaths = async () => {
  const categories = await client.fetch(
    groq`*[_type == 'category']{
      "slug": slug.current,
      "id": _id,
    }`
  );
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const category = await client.fetch(
    groq`*[_type == 'category' && slug.current == "${params.slug}"]
    {
        title, 
        description,
        icon,
        "products": *[_type=='product' && references(^._id)] | order(name) { 
          "id": _id,
          name,
          description,
          exerpt,
          "type": productType->name,
          "slug": slug.current,
        }
    }`
  );
  return {
    props: { category },
    revalidate: 1,
  };
};

export default Category;
