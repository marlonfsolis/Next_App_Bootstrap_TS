import { ToastContainer } from "react-toastify";

import Head from "next/head";

import FooterComp from "./FooterComp";
import SideNavbar from "./SideNavbar";
import TopNavbar from "./TopNavbar";

import styles from "styles/Layout.module.css";

export default function Layout({ children }: any): JSX.Element {
	return (
		<>
			<Head>
				<title>Next App</title>
				<meta name="description" content="Next application template using Bootstrap css framework." />
				<link rel="icon" href={"/favicon.ico"} />
			</Head>

			<div className="d-block d-sm-flex flex-sm-row vh-100">
				<SideNavbar/>

				<div className={[styles.leftContent, "d-block d-sm-flex flex-sm-column flex-fill"].join(" ")}>
					<TopNavbar/>
					<section id="content" className={[styles.content, "flex-fill"].join(" ")}>
						{children}
						<FooterComp/>
					</section>
				</div>
			</div>

			<ToastContainer position="bottom-right" autoClose={20000} hideProgressBar={true} closeOnClick theme={"colored"} />
		</>
	);
}
