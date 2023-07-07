import { redirect } from "react-router-dom";
import { signUp } from "../../authFunctions/authFunctions";

export const action = async ({ request }) => {
  try {
    const data = await request.formData();
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    await signUp(username, email, password);
    alert('Signed up successfully')
    return redirect('/signIn');
  }  catch (error) {
    console.log(error);
  }
}