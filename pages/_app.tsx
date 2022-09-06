import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
