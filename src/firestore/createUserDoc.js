import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export default async function createUserDoc(username) {
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
        await addDoc(collection(db, 'users'), userData);
        console.log('Created user document');
    } catch (error) {
        console.log('Error creating user document: ', error);
    }
}