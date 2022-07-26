import { useEffect } from "react";

import Head from "next/head";
import type { AppProps } from "next/app";

import Layout from "components/shared/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		import("bootstrap").then(function (params: any) {
			window.bootstrap = params;
		});
	}, []);

	return (
		<>
			<Head>
				<title>Next App</title>
				<link rel="icon" href={"/favicon.ico"} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Generated by create next app" />
			</Head>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
