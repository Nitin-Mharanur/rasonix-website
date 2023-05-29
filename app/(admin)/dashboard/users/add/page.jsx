"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function page() {
  const router = useRouter();
  const [detail, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("http://127.0.0.1:8000/api/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...detail }),
    }).then((res) => res.json());
    console.log(res.success);
    setLoading(false);
    setResponse(res);
    if (res.success) {
      router.push("/dashboard/users");
      // toast.success("user added successully");
    }
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full p-4 h-screen flex justify-center">
      <form className="w-[70%]" onSubmit={(e) => handleSubmit(e)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="Name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Andrew Doe"
              onInput={(e) => setDetails({ ...detail, name: e.target.value })}
            />
            {response?.errors?.name && <p>{response?.errors?.name[0]}</p>}
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@abc.com"
              onInput={(e) => setDetails({ ...detail, email: e.target.value })}
            />
            {response?.errors?.email && <p>{response?.errors?.email[0]}</p>}
          </div>

          <div>
            <label
              for="phone_no"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone_no"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onInput={(e) =>
                setDetails({ ...detail, phone_no: e.target.value })
              }
            />
            {response?.errors?.phone_no && (
              <p>{response?.errors?.phone_no[0]}</p>
            )}
          </div>
          <div>
            <label
              for="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <select
              type="text"
              id="company"
              name="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setDetails({ ...detail, role: e.target.value })}
            >
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="user">User</option>
            </select>
            {response?.errors?.role && <p>{response?.errors?.role[0]}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            onInput={(e) => setDetails({ ...detail, password: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default page;
