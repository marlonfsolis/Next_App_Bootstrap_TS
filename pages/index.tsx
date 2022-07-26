import { useEffect } from "react";
import type { NextPage } from 'next'
import { useRouter } from "next/router";

import LoaderSpinner from "components/shared/LoaderSpinner";

export default function Index() {
	const router = useRouter();

	useEffect(() => {
		router.push("/home").then();
	});

	return <LoaderSpinner />;
}
