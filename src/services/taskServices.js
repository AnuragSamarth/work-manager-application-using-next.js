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
