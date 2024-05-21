import Layout from "@/components/layouts";
import { store } from "@/redux/app/store";
import "@/styles/globals.css";
import { fetchDataFromFirebase } from "@/utils/firebaseAPI";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  return (
    <>
      <Head>
        <title>Adil Alrooh.</title>
        <meta name="description" content="Adil Alrooh." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
