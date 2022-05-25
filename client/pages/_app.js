import { JoinProvider } from "../contexts/JoinContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <JoinProvider>
        <Component {...pageProps} />
      </JoinProvider>
    </>
  );
}

export default MyApp;
