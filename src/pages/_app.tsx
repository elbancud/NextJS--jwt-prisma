import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../lib/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

function EntryPoint({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {}, []);
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default EntryPoint;
