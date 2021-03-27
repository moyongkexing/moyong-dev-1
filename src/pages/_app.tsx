import "src/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-app">
        <props.Component {...props.pageProps} />
      </div>
    </>
  );
};

export default App;
