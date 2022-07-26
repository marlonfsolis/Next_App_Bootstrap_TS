import React, { useEffect, useState } from "react";
import Image from "next/image";

import SideNavbarMenuItems from "./SideNavbarMenuItems";
import ActiveLink from "./ActiveLink";

import styles from "styles/Layout.module.css";

const SideNavbar = (): JSX.Element => {
	const sideNavbarStatuses = { Close: "Close", Open: "Open", Offcanvas: "Offcanvas" };
	const [sideNavbarStatus, setSideNavbarStatus] = useState(sideNavbarStatuses.Close);
	const [sideNavbarWidth, setSideNavbarWidth] = useState("4.5rem");

	useEffect(() => {
		if (typeof window !== "undefined") {
			const snbs = localStorage.getItem("sideNavbarStatus");
			if (!snbs) {
				localStorage.setItem("sideNavbarStatus", sideNavbarStatuses.Close);
			} else {
				if (snbs === sideNavbarStatuses.Open) {
					setSideNavbarStatus(sideNavbarStatuses.Open);
					setSideNavbarWidth("280px");
				} else {
					setSideNavbarStatus(sideNavbarStatuses.Close);
					setSideNavbarWidth("4.5rem");
				}
			}
		}
	}, [sideNavbarStatuses.Open, sideNavbarStatuses.Close]);

	function onClick_SideNavbarToggleBtn(action: string) {
		switch (action) {
			case sideNavbarStatuses.Open:
				setSideNavbarWidth("280px");
				setTimeout(() => {
					setSideNavbarStatus(sideNavbarStatuses.Open);
					localStorage.setItem("sideNavbarStatus", sideNavbarStatuses.Open);
				}, 100);
				break;

			case sideNavbarStatuses.Close:
				setSideNavbarWidth("4.5rem");
				setTimeout(() => {
					setSideNavbarStatus(sideNavbarStatuses.Close);
					localStorage.setItem("sideNavbarStatus", sideNavbarStatuses.Close);
				}, 80);
				break;

			default:
				break;
		}
	}

	const openNavbar = (
		<div className={[styles.sideNavbar, "d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"].join(" ")} style={{ width: sideNavbarWidth }}>
			<div className="d-flex flex-row align-items-center">
				<ActiveLink href="/" className="d-flex flex-fill align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
					<i className="bi bi-bootstrap me-2"/>
					<span className="fs-4">Menu</span>
				</ActiveLink>
				<a href="#" className="text-white text-decoration-none" onClick={() => onClick_SideNavbarToggleBtn(sideNavbarStatuses.Close)}>
					<i className="bi bi-caret-left"/>
				</a>
			</div>

			<hr />
			<SideNavbarMenuItems />
			<hr />
			<div className="d-flex justify-content-center">
				<div className="dropdown">
					<a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
						<Image src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
						<strong>mdo</strong>
					</a>
					<ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
						<li>
							<a className="dropdown-item" href="#">
								New project...
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Settings
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Profile
							</a>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Sign out
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

	const closeNavbar = (
		<div className={[styles.sideNavbar, "d-flex flex-column flex-shrink-0 bg-dark"].join(" ")} style={{ width: sideNavbarWidth }}>
			<div className="d-flex flex-row align-items-center">
				<a href="#" className="d-block p-3 link-light text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
					<i className="bi bi-bootstrap"/>
					<span className="visually-hidden">Icon-only</span>
				</a>
				<a href="#" className="text-white text-decoration-none" onClick={() => onClick_SideNavbarToggleBtn(sideNavbarStatuses.Open)}>
					<i className="bi bi-caret-right"/>
				</a>
			</div>

			<ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
				<li className="nav-item">
					<ActiveLink href="/home" exact={true} className="nav-link py-3 border-bottom text-white" title="Home">
						<i className="bi bi-house" role="img" aria-label="Home"/>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/home/about" className="nav-link py-3 border-bottom text-white">
						<i className="bi bi-info-square" role="img" aria-label="About"/>
					</ActiveLink>
				</li>
				<li>
					<a href="#" className="nav-link py-3 border-bottom text-white" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
						<i className="bi bi-table" role="img" aria-label="Orders"/>
					</a>
				</li>
				<li>
					<a href="#" className="nav-link py-3 border-bottom text-white" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
						<i className="bi bi-grid" role="img" aria-label="Products"/>
					</a>
				</li>
				<li>
					<a href="#" className="nav-link py-3 border-bottom text-white" title="Customers" data-bs-toggle="tooltip" data-bs-placement="right">
						<i className="bi bi-person-circle" role="img" aria-label="Customers"/>
					</a>
				</li>
			</ul>
			<div className="dropdown border-top">
				<a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false" title="mdo">
					<Image src="https://github.com/mdo.png" alt="mdo" width={24} height={24} className="rounded-circle" />
				</a>
				<ul className={"dropdown-menu dropdown-menu-dark text-small shadow"} aria-labelledby="dropdownUser3">
					<li>
						<a className="dropdown-item" href="#">
							New project...
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Settings
						</a>
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Profile
						</a>
					</li>
					<li>
						<hr className="dropdown-divider" />
					</li>
					<li>
						<a className="dropdown-item" href="#">
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	);

	return (
		<>
			<div className="vh-100 d-none d-sm-flex d-md-flex">
				{sideNavbarStatus === sideNavbarStatuses.Open && openNavbar}
				{sideNavbarStatus === sideNavbarStatuses.Close && closeNavbar}
			</div>
		</>
	);
};

export default SideNavbar;
