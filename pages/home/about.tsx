import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App - About</title>
				<meta name="description" content="About page" />
			</Head>

			<main className="container">
				<h1>About</h1>
				<p>This is the About page.</p>
			</main>
		</>
	);
};

export default About;
