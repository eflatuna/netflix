import React from "react";
import CardContainer from "./components/CardContainer";
export const metaData = {
	title: "Profile",
	description: "This is Profile page",
};

const Profile = () => {
	return (
		<div className="flex items-center justify-center pt-20">
			<div className="flex flex-col">
				<h1 className="text-3xl md:6xl text-white text-center">
					Who's Watching?
				</h1>
				<CardContainer />
			</div>
		</div>
	);
};
export default Profile;
