import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function saveScore(user, difficulty, timeLimit, score) {
    try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        const currentScores = userDoc.data().scores;

        const date = new Date();
        const newScoreEntry = { score, difficulty, timeLimit, date};

        await updateDoc(userDocRef, {scores: [...currentScores, newScoreEntry]});
        console.log('Score saved');
        alert('Score saved!');
    } catch (error) {
        console.log('Error saving score: ', error);
    }
}