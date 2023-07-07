import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function createUserDoc(userId, username) {
    const userData = { username, scores: [] }

    try {
        await setDoc(doc(db, 'users', userId), userData);
        console.log('Created user document');
    } catch (error) {
        console.log('Error creating user document: ', error);
    }
}