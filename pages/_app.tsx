import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Embrald - Premium bath feetings</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
