"use client";

import { signUp } from "@/services/userServices";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const [userInfo, setUserInfo] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userInfo);
    // form submit
    try {
      const result = await signUp(userInfo);
      console.log(result);
      toast.success("user signup successfully", { position: "top-center" });
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message , {
        position: "top-center",
      }) 
    }
    setUserInfo({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="user_name"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your username"
              required
              onChange={handleChange}
              value={userInfo.name}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="you@example.com"
              required
              onChange={handleChange}
              value={userInfo.email}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
              required
              onChange={handleChange}
              value={userInfo.password}
            />
          </div>
          <div>
            <label
              htmlFor="user_about"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              About You
            </label>
            <textarea
              id="user_about"
              name="about"
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Tell us about yourself"
              onChange={handleChange}
              value={userInfo.about}
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="profile_url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Profile URL
            </label>
            <input
              type="url"
              id="profile_url"
              name="profileURL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://example.com/profile"
              onChange={handleChange}
              value={userInfo.profileURL}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
