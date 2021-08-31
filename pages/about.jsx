import Head from "next/head";
import AboutMain from "../components/templates/about/AboutMain/Index";
import Header from "../components/organisms/navigation/Header/Index";
import Footer from "../components/organisms/navigation/Footer/Index";

export default function About() {
  return (
    <>
      <Head>
        <title>О нас</title>
      </Head>
      <Header />
      <AboutMain />
      <Footer />
    </>
  );
}
