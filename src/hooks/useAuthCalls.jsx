import { auth } from "@/auth/firebase";
import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
import { login, logout } from "@/redux/feature/authSlice";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
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

	const logOut = () => {
		signOut(auth);
		toastSuccessNotify("Logged out successfully!");
	};

	const userObserver = () => {
		//? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { email, displayName, photoURL } = user;
				dispatch(login({ email, displayName, photoURL }));
				sessionStorage.setItem(
					"user",
					JSON.stringify({ email, displayName, photoURL })
				);
			} else {
				dispatch(logout());
				sessionStorage.removeItem("user");
			}
		});
	};

	//* https://console.firebase.google.com/
	//* => Authentication => sign-in-method => enable Google
	//! Google ile girişi enable yap
	//* => Authentication => settings => Authorized domains => add domain
	//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
	const signUpProvider = () => {
		//? Google ile giriş yapılması için kullanılan firebase metodu
		const provider = new GoogleAuthProvider();
		//? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
				router.push("/profile");
				toastSuccessNotify("Logged in successfully");
			})
			.catch((error) => {
				// Handle Errors here.
				console.log(error);
			});
	};

	return { createUser, signIn, userObserver, logOut, signUpProvider };
};

export default useAuthCalls;
