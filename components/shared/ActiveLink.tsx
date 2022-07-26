import { useRouter } from "next/router";
import React, { MouseEventHandler } from "react";

type Props = {
	className?: string;
	children?: any;
	exact?: boolean;
	href: string;
	activeClassName?: string;
	onItemClick?: MouseEventHandler<HTMLAnchorElement>;
	[key: string]: any;
};

const ActiveLink = (props: Props): JSX.Element => {
	const router = useRouter();
	const { asPath } = useRouter();

	// Props
	let classes = props.className || "";
	const children = props.children;
	const isExact = props.exact || false;
	const href = props.href || "";
	const activeClassName = props.activeClassName || "active";
	const onItemClick = props.onItemClick || function (): void {};

	const addActiveClass = () => {
		classes = classes.concat(" ", activeClassName);
	};

	if ((isExact && (href === asPath || href + "#" === asPath)) || (!isExact && asPath.startsWith(href))) {
		addActiveClass();
	}

	const handleClick = async (e: any): Promise<void> => {
		e.preventDefault();
		onItemClick(e);
		await router.push(href);

		// console.log(e);
	};

	let elemProps = {
		...props,
		className: classes,
		href: href,
		onClick: handleClick
	};
	delete elemProps.exact;
	delete elemProps.children;
	delete elemProps.onItemClick;
	delete elemProps.activeClassName;

	return <a {...elemProps}>{children}</a>;
};

export default ActiveLink;
