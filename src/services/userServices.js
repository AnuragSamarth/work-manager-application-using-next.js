import { httpAxios } from "@/helper/httpHelper";
import { toast } from "react-toastify";

export async function signUp(user) {
  try {
    const result = await httpAxios
      .post("/api/users", user)
      .then((res) => res.data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function login(loginData) {
  try {
    const result = await httpAxios
      .post("/api/login", loginData)
      .then((res) => res.data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function currentUser() {
  try {
    const result = await httpAxios
      .get("/api/current-user")
      .then((res) => res.data);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    toast.error("error in loading current user");
  }
}

export async function logoutUser(){
  try {
    const result = await httpAxios.post("/api/logout").then((res)=> res.data);

    return result;
  } catch (error) {
    console.log(error);
    toast.error(("error in logout current user"))
  }
}
