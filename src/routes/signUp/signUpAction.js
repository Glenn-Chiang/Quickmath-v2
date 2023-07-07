import { redirect } from "react-router-dom";
import { signUp } from "../../authFunctions/authFunctions";

export const action = async () => {

    await signUp(username, email, password);
    return redirect('/signIn');
  }