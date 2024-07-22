import { Provider } from "react-redux";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/redux/store";
import "../i18n";

export default function App({ Component, pageProps }: AppProps) {
    if (typeof window !== 'undefined') {
        localStorage.clear()
    }
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

// export { default } from 'next/app'