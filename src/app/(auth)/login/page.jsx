"use client";
import React, { useState } from "react";
import GoogleIcon from "/public/icons/GoogleIcon";
import useAuthCalls from "@/hooks/useAuthCalls";
import Link from "next/link";

const Login = () => {
	const [info, setInfo] = useState({
		email: "",
		password: "",
	});
	const { signIn, signUpProvider } = useAuthCalls();

	const { email, password } = info;

	const handleChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		signIn(email, password);
	};

	return (
		<main className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
			<div className="bg-black w-full h-full lg:bg-opacity-50">
				<div className="bg-black bg-opacity-70 p-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full mx-auto">
					<form onSubmit={handleSubmit}>
						<h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3 ">
							Sign In
						</h2>
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
						<div className="flex justify-between">
							<span className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]">
								Forgot Password
							</span>
							<Link
								className="py-3 font-[0.75em] cursor-pointer decoration-none text-gray-500 hover:text-[#ff4b45]"
								href="/register"
							>
								Sign Up
							</Link>
						</div>
						<button className="btn-danger">Sign In</button>
						<button
							type="button"
							className="btn-danger flex justify-between text-center "
							onClick={signUpProvider}
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

export default Login;
