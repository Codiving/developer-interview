import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer, Header } from "../src/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
