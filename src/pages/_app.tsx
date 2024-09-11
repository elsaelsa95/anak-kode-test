import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n";

export default function App({ Component, pageProps }: AppProps) {
    if (typeof window !== 'undefined') {
        localStorage.clear()
    }
    return (
        <Component {...pageProps} />
    );
}

// export { default } from 'next/app'