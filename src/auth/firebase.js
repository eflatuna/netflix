import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_apiKey,
	authDomain: process.env.NEXT_PUBLIC_authDomain,
	projectId: process.env.NEXT_PUBLIC_projectId,
	storageBucket: process.env.NEXT_PUBLIC_storageBucket,
	messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
	appId: process.env.NEXT_PUBLIC_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
