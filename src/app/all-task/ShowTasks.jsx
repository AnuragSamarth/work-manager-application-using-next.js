"use client";

import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";
import { getTasksOfUser } from "@/services/taskServices";

export default function ShowTasks() {
  const [tasks, setTasks] = useState([]);
  const { user, loading } = useContext(UserContext);

  const fetchTasks = async () => {
    if (user && user._id) {
      try {
        const taskData = await getTasksOfUser(user._id); // Wait for the promise to resolve
        setTasks(taskData); // Set the tasks state with the resolved data
        // console.log("Fetched tasks:", tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user]);
  console.log(tasks);

  if (loading) return <section>Loading...</section>;

  if (!user) return <section>No user logged in.</section>;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }


  return (
    <section className="container mx-auto p-4">
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
              <span className="text-sm text-gray-500 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formatDate(item.addedDate)}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.content}</p>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex justify-between">
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                item.status === 'pending' 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              onClick={() => handleUpdateStatus(index, 'cancelled')}
              disabled={item.status !== 'pending'}
            >
              Cancel
            </button>
            <button 
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                item.status === 'completed'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
              onClick={() => handleUpdateStatus(index, item.status === 'completed' ? 'pending' : 'completed')}
            >
              {item.status === 'completed' ? 'Mark as Pending' : 'Complete'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}
