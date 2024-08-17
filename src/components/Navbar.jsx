"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import {
	Disclosure,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Transition,
} from "@headlessui/react";
import useAuthCalls from "@/hooks/useAuthCalls";
import { useSelector } from "react-redux";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
	const [showBackground, setShowBackground] = useState(false);
	const { logout } = useAuthCalls();
	const { currentUser } = useSelector((state) => state.auth);
	useEffect(() => {
		const handleScroll = () => {
			// console.log(window.scrollY);
			const TOP_OFFSET = 60;
			if (window.scrollY >= TOP_OFFSET) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Disclosure as="nav" className="text-white fixed top-0 z-20 w-full">
				<div
					className={`px-4 md:px-16 py-6 transition duration-500 ${
						showBackground ? "bg-zinc-900 bg-opacity-90" : ""
					}`}
				>
					<div className="relative flex items-center justify-between">
						<Link href="/">
							<img
								src="/images/logo.png"
								className="h-4 lg:h-7"
								alt="Logo"
							/>
						</Link>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							{currentUser && (
								<h5 className="mr-2 capitalize">
									{currentUser?.displayName}
								</h5>
							)}

							{/* Profile dropdown */}
							<Menu as="div" className="relative">
								<div>
									<MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
										<span className="sr-only">
											Open user menu
										</span>
										<img
											className="h-8 w-8 rounded-full"
											src={
												currentUser?.photoURL ||
												"/images/default-slate.png"
											}
											alt="user"
											loading="lazy"
											referrerPolicy="no-referrer"
										/>
									</MenuButton>
								</div>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<MenuItem>
											<Link
												href="/register"
												className={classNames(
													"bg-gray-100",
													"block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 cursor-pointer"
												)}
											>
												Register
											</Link>
										</MenuItem>
										<MenuItem>
											<Link
												href="/login"
												className={classNames(
													"bg-gray-100",
													"block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 cursor-pointer"
												)}
											>
												Login
											</Link>
										</MenuItem>
										<MenuItem>
											<Link
												href="/profile"
												className={classNames(
													"bg-gray-100",
													"block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 cursor-pointer"
												)}
											>
												Profile
											</Link>
										</MenuItem>
										<MenuItem>
											<span
												className={classNames(
													"bg-gray-100",
													"block px-4 py-2 text-sm text-gray-700 hover:bg-slate-200 cursor-pointer"
												)}
												role="button"
												onClick={() => logout()}
											>
												Log out
											</span>
										</MenuItem>
									</MenuItems>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</Disclosure>
		</>
	);
};

export default Navbar;
