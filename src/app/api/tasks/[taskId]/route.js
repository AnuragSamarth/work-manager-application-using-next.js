// api/tasks/{taskId}

import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// Get the single task by Id
export async function GET(request, { params }) {
  // console.log(params)
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
      message: "Faild to get task !!",
      success: false,
    });
  }
}

// Update the single task by Id
export async function PUT(request, { params }) {
  try {
    const { taskId } = params;
    console.log(taskId);
    const { title, content, status } = await request.json();
    let task = await Task.findById(taskId);
    (task.title = title), (task.content = content), (task.status = status);
    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Fail to Update the task !!",
      status: false,
    });
  }
}

// Delete the single task by Id
export async function DELETE(request, { params }) {
  try {
    const { taskId } = params;
    await Task.deleteOne({
      _id: taskId,
    });
    return NextResponse.json({
      message: "Task Deleted successfully !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Faild to delete the tasks !!",
      success: false,
    });
  }
}
