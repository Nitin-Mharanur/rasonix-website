"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "lib/axios";
import Modal from "@/components/admin/Modal";
const page = () => {
  const [response, setResponse] = useState([]);
  async function fetchData() {
    const res = await axios.get("/api/users/");

    setResponse(res.data);
  }

  async function handleDelete(id) {
    const response = await axios.post(`/api/user/${id}/destroy/`, {
      id,
    });
    setResponse(response.data.users);
    console.log("function called");
  }
  function handleEdit() {
    console.log("function called");
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white m-4 w-full">
        <div className="fNamelex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-red-600 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        Id
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Phone
                      </th>
                      <th className="whitespace-nowrap  px-6 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {response.map((user) => (
                      <tr
                        className="border-b dark:border-neutral-500 hover:bg-gray-300 transition-all ease-out duration-200 [&:nth-child(even)]:bg-gray-300"
                        key={user.id}
                      >
                        <td className="whitespace-nowrap  px-6 py-4 font-medium">
                          {user.id}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {user.name}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {user.email}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          {user.phone_no}
                        </td>
                        <td className="whitespace-nowrap  px-6 py-4">
                          <div className="flex gap-3 justify-center font-semibold">
                            <button
                              className="bg-yellow-400 p-2 rounded-md"
                              onClick={() => handleEdit(user.id)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-600 p-2 rounded-md"
                              onClick={() => handleDelete(user.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="absolute w-full h-screen bg-gray-200 opacity-80 blur-md flex justify-center items-center z-10 top-10 left-0"></div>
        <Modal />
      </div>
    </>
  );
};

export default page;
