import styles from "styles/Layout.module.css";

const LoaderSpinner = (): JSX.Element => {
	return (
		<>
			<div className={[styles.loader, "d-flex justify-content-center align-items-center"].join(" ")}>
				<div className="spinner-grow" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</>
	);
};

export default LoaderSpinner;
