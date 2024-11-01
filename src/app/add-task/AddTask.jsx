"use client";

import { addTask } from "@/services/taskServices";
import React, { useState } from "react";
import { toast } from "react-toastify";


function AddTask() {
 
  const [task, setTask] = useState({
    // userId: "67036e19bc2cdb2578c593f5"
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setTask((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleClear(){
    setTask({
      title: "",
      content:"",
      status:""
    })
    toast.warn("Clear all fields")
  }

 async function handleSubmit(e) {
    e.preventDefault();
    try {
     const result = await addTask(task);
     console.log(result)
     toast.success("your task are added", {
      position: "top-center"
     })
     setTask({
      title: "",
      content: "",
      status: ""
     })
    } catch (error) {
      console.log(error);
      toast.error("Taxt not added", {
        position: "top-center"
      })
    }
    console.log(task);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
    <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="px-8 py-10">
        <h2 className="text-3xl font-extrabold text-center text-teal-700 mb-8">Create New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Enter task title"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Task Description
            </label>
            <textarea
              id="content"
              name="content"
              rows={4}
              value={task.content}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Describe your task..."
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Task Status
            </label>
            <select
              id="status"
              name="status"
              value={task.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 ease-in-out"
              required
            >
              <option value="" disabled>Select status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex items-center justify-between space-x-4 pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="w-full px-6 py-3 text-teal-700 bg-teal-100 rounded-lg hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}

export default AddTask;
