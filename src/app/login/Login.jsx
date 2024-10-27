"use client";

import { login } from "@/services/userServices";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
 const router = useRouter();
  const [loginData, setLoginData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(loginData);
    try {
      const result = await login(loginData)
      console.log(result);
      toast.success("Logged in success.", { position: "top-center" });
      router.push("/user-profile")
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
