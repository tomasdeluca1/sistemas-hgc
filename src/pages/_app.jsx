import React, { useEffect } from "react";
import "../app/globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <>
      <Toaster />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
    // </Layout>
  );
}

export default MyApp;
