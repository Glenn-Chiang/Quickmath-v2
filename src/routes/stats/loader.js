import getScores from "../../firestore/getScores";

export async function loader({ params }) {
    try {
        const userId = params.userId;
        const userScores = await getScores(userId);
        return userScores;
    } catch (error) {
        console.log('Error loading stats: ', error);
        return [];
    }
}