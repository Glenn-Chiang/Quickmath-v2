import { redirect } from "react-router-dom";
import { signOutUser } from "../../authFunctions/authFunctions";

export const action = async () => {
    await signOutUser();
    return redirect('/signIn');
}