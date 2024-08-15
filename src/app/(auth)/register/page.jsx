"use client";
import React, { useState } from "react";
import GoogleIcon from "/public/icons/GoogleIcon";
import useAuthCalls from "@/hooks/useAuthCalls";

const Register = () => {
	const [info, setInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const { createUser } = useAuthCalls();

	const { email, password, firstName, lastName } = info;

	const handleChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		const displayName = `${firstName} ${lastName}`;
		createUser(email, password, displayName);
	};

	return (
		<main className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<div className="bg-black bg-opacity-70 p-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full mx-auto">
					<form onSubmit={handleSubmit}>
						<h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3 ">
							Sign Up
						</h2>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								className="peer"
								required
								placeholder=" "
								name="firstName"
								onChange={handleChange}
							/>
							<label htmlFor="firstName">First Name</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								className="peer"
								required
								placeholder=" "
								name="lastName"
								onChange={handleChange}
							/>
							<label htmlFor="lastName">Last Name</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="email"
								className="peer"
								required
								placeholder=" "
								name="email"
								onChange={handleChange}
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="password"
								className="peer"
								required
								placeholder=" "
								name="password"
								onChange={handleChange}
							/>
							<label htmlFor="password">Password</label>
						</div>
						<button className="btn-danger">Register</button>
						<button
							type="button"
							className="btn-danger flex justify-between text-center "
						>
							Continue with Google
							<GoogleIcon />
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Register;
