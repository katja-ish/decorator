import Head from "next/head";
import PressTable from "../components/templates/press/PressTable/Index";
import Layout from "../components/Layout";

const title = "Публикации";
const description = "Страница публикаций";

export default function Press() {
  return (
    <Layout title={title} description={description}>
      <Head>
        <title>Публикации</title>
      </Head>

      <PressTable />
    </Layout>
  );
}
