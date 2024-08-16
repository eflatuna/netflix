import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ name, image }) => {
	let router = useRouter();
	return (
		<div
			className="w-44 mx-auto cursor-pointer group"
			onClick={() => router.push("/movies")}
		>
			<div className="w-44 h-44 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden ">
				<img
					src={image}
					alt="profile"
					className="w-max h-max object-contain"
				/>
			</div>
			<div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white ">
				{name}
			</div>
		</div>
	);
};

export default ProfileCard;
