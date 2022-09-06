import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
