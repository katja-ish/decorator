import Head from "next/head";
import AboutMain from "../components/templates/about/AboutMain/Index";
import Layout from "../components/Layout";

const title = "О нас";
const description = "Об авторе проекта";

export default function About() {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>О нас</title>
      </Head>

      <AboutMain />
    </Layout>
  );
}
