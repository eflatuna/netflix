import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { logout } from "@/redux/feature/authSlice";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	useEffect(() => {
		userObserver();
	}, []);
	const createUser = async (email, password, displayName) => {
		try {
			//? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
			await createUserWithEmailAndPassword(auth, email, password);
			//? kullanıcı profilini güncellemek için kullanılan firebase metodu
			await updateProfile(auth.currentUser, {
				displayName,
			});
			toastSuccessNotify("Registered successfully!");
			router.push("/login");
		} catch (error) {
			toastErrorNotify(error.message);
		}
	};

	//* https://console.firebase.google.com/
	//* => Authentication => sign-in-method => enable Email/password
	//! Email/password ile girişi enable yap
	const signIn = async (email, password) => {
		try {
			//? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
			await signInWithEmailAndPassword(auth, email, password);

			toastSuccessNotify("Logged in successfully!");
			router.push("/profile");
		} catch (error) {
			toastErrorNotify(error.message);
		}
	};
	const userObserver = () => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { email, displayName, photoURL } = user;
				dispatch(login[(email, displayName, photoURL)]);
			} else {
				dispatch(logout());
			}
		});
	};

	return { createUser, signIn, userObserver };
};

export default useAuthCalls;
