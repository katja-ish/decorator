import Head from "next/head";
import Layout from "../components/Layout";

const title = "Проекты";
const description = "Страница проектов";

export default function Projects() {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>Проекты</title>
      </Head>

      <h1 style={{ padding: "240px 32px", fontSize: "40px" }}>Все проекты</h1>
    </Layout>
  );
}
