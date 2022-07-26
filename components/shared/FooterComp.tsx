import React from "react";
import Image from "next/image";

import styles from "styles/Home.module.css";

const FooterComp = (): JSX.Element => {
	return (
		<>
			<footer className="footer mt-auto py-5 bg-light">
				<div className="container">
					<p>
						<strong>React-Bootstrap</strong> The best of the best together. More info in the <a href="https://react-bootstrap.github.io/getting-started/introduction/">official site</a>. For Bootstrap info go to <a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap site</a>.
					</p>
					<p>
						The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
					</p>

					<div className="d-flex justify-content-center">
						<a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
							Powered by{" "}
							<span className={styles.logo}>
								<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
							</span>
						</a>
					</div>
				</div>
			</footer>
		</>
	);
};

export default FooterComp;
