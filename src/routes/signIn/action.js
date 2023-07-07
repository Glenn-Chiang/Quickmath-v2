import { redirect } from "react-router-dom";
import { signIn } from "../../authFunctions/authFunctions";

export const action = async ({ request }) => {
    try {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        await signIn(email, password);
        alert('Signed in successfully');
        return redirect('/');
    } catch (error) {
        console.log(error);
    }
}