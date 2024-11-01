import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import { connectDb } from "@/helper/db";
import jwt from 'jsonwebtoken';

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

  // fetching logged in user id
  const authToken = request.cookies.get("authToken")?.value;
  //  console.log(authToken);

  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data)
  console.log(data._id)

  try {
    const task = new Task({
      title,
      content,
      userId: data._id
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
