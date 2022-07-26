import { MouseEventHandler, MouseEvent } from "react";

import ActiveLink from "./ActiveLink";

type Props = {
	onItemClick?: MouseEventHandler<HTMLAnchorElement>;
};

const SideNavbarMenuItems = (props: Props): JSX.Element=> {

	const onItemClickHandler: MouseEventHandler<HTMLAnchorElement> = (e: MouseEvent<HTMLAnchorElement>) => {
		if (typeof props.onItemClick === "function") props.onItemClick(e);
	};

	return (
		<ul className="nav nav-pills flex-column mb-auto">
			<li className="nav-item">
				<ActiveLink href="/home" exact={true} className="nav-link text-white" onItemClick={onItemClickHandler}>
					<i className="bi bi-house me-2"/>
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/home/about" className="nav-link text-white" onItemClick={onItemClickHandler}>
					<i className="bi bi-info-square me-2"/>
					About
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
					<i className="bi bi-table me-2"/>
					Orders
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
					<i className="bi bi-grid me-2"/>
					Products
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="#" className="nav-link text-white" onItemClick={onItemClickHandler}>
					<i className="bi bi-person-circle me-2"/>
					Customers
				</ActiveLink>
			</li>
		</ul>
	);
};

export default SideNavbarMenuItems;
