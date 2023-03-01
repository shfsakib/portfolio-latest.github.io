import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import "/styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <Toaster position="top-center" reverseOrder={true} duration={1500} />
    </Fragment>
  );
}
