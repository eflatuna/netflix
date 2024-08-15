import React from "react";
import GoogleIcon from "../../../../public/icons/GoogleIcon";

const Register = () => {
	return (
		<main className="h-screen w-full gb-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
			<div className="bg-black w-full h-full bg-opacity-50">
				<div className="bg-black bg-opacity-70 p-16 self-center relative top-28 lg:w-2/5 lg:max-w-md w-full mx-auto">
					<form>
						<h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
							Sign Up
						</h2>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								className="peer"
								required
								placeholder=""
								name="firstName"
							/>
							<label htmlFor="lastname">First Name</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="text"
								className="peer"
								required
								placeholder=""
								name="lastName"
							/>
							<label htmlFor="email">Last Name</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="email"
								className="peer"
								required
								placeholder=""
								name="lastName"
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className="relative z-0 w-full mb-6 group">
							<input
								type="password"
								className="peer"
								required
								placeholder=""
								name="password"
							/>
							<label htmlFor="password">Password</label>
						</div>
						<button className="btn-danger">Register</button>
						<button className="btn-danger flex justify-between text-center">
							Contunie with Google
							<GoogleIcon />
						</button>
					</form>
				</div>
			</div>
		</main>
	);
};
export default Register;
