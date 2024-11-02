import { httpAxios } from "@/helper/httpHelper";

export async function addTask(task) {
  try {
    const result = await httpAxios
      .post("/api/tasks", task)
      .then((res) => res.data);
      console.log(result)
  } catch (error) {
    console.log(error)
  }
}


export async function getTasksOfUser(userID){
  try {
    console.log(userID)
    const result = await httpAxios.get(`/api/user/${userID}/tasks`).then((res) => res.data)
    return result;
  } catch (error) {
    console.log(error)
  }
}