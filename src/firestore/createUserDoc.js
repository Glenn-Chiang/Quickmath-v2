import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function createUserDoc(userId, username) {
    const scores = {
        easy: {
            30: [],
            60: [],
            90: [],
            120: []
        },
        medium: {
            30: [],
            60: [],
            90: [],
            120: []
        },
        hard: {
            30: [],
            60: [],
            90: [],
            120: []
        }
    }

    const userData = { username, scores }

    try {
        await setDoc(doc(db, 'users', userId), userData);
        console.log('Created user document');
    } catch (error) {
        console.log('Error creating user document: ', error);
    }
}