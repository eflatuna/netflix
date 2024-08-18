"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateLayout = ({ children }) => {
	const { currentUser } = useSelector((state) => state.auth);
	const router = useRouter();
	useEffect(() => {
		const user = JSON.parse(sessionStorage.getItem("user"));
		if (!user) {
			router.push("/login");
		}
	}, [currentUser]);

	return <div>{children}</div>;
};

export default PrivateLayout;
