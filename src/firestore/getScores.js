import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function getScores(userId) {
    const userDocRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userDocRef);
    const scores = userDoc.data().scores;
    return scores;
}