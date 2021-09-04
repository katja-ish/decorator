import Head from "next/head";
import Layout from "../components/Layout";

const title = "Декоратор N";
const description = "Главная страница";

export default function Home() {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>Decorator N</title>
        <meta name="description" content="Decorator description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={{ padding: "240px 32px", fontSize: "40px" }}>
        Главная страница
      </h1>
    </Layout>
  );
}
