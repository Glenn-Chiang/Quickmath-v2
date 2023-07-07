import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import createUserDoc from "../firestore/createUserDoc";

const signUp = async (username, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;
        await createUserDoc(userId, username);
        console.log('Signed up');
    } catch (error) {
        console.log('Error signing up:', error);
    }
}

const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Signed in');
    } catch (error) {
        console.log('Error signing in', error);
    }
}

const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log('Error signing out', error);
    }
}

export { signUp, signIn, signOutUser }