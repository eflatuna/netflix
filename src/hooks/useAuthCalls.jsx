import { createUserWithEmailAndPassword } from "firebase/auth";

const useAuthCalls = () => {
	const createUser = async (email, password) => {
		try {
			createUserWithEmailAndPassword(auth, email, password);
		} catch (error) {}
	};
	return { createUser };
};

export default useAuthCalls;
