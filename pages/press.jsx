import Head from "next/head";
import PressTable from "../components/templates/press/PressTable/Index";
import Header from "../components/organisms/navigation/Header/Index";
import Footer from "../components/organisms/navigation/Footer/Index";

export default function Press() {
  return (
    <>
      <Head>
        <title>Публикации</title>
      </Head>
      <Header />
      <PressTable />
      <Footer />
    </>
  );
}
