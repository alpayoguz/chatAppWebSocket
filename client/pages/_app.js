import ChatProvider from "../contexts/ChatContext";
import { JoinProvider } from "../contexts/JoinContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <JoinProvider>
        <ChatProvider>
          <Component {...pageProps} />
        </ChatProvider>
      </JoinProvider>
    </>
  );
}

export default MyApp;
