import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";

connectDb();

// get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "Faild to get all tasks !!",
      success: false,
    });
  }
}

//create all the task
export async function POST(request) {
  const { title, content, userId } = await request.json();

  //    console.log({title, content, userId})
  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    // console.log(task);

    const createdTask = await task.save();
    const response = NextResponse.json(createdTask, { status: 201 });
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Faild to create Task !!",
      success: false,
    });
  }
}
