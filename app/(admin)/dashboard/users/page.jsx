"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import Link from "next/link";
import DeleteUser from "@/utils/DeleteUser";
import Loading from "@/components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:8000/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      // Handle the error state or display an error message
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      name: "User Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "User email",
      selector: (row) => row.email,
    },
    {
      name: "User Phone",
      selector: (row) => row.phone_no,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2">
          <Link
            className="p-2  rounded-md bg-yellow-500"
            href={`/dashboard/users/${row.id}/edit`}
          >
            Edit
          </Link>
          <DeleteUser id={row.id} setUsers={setUsers} />
        </div>
      ),
    },
  ];
  // if (loading) return <Loading />;
  return (
    <>
      <div className="p-4">
        <Table columns={columns} data={users} pagination fixedHeader />
      </div>
      <div className="absolute top-[80%] right-4">
        <Link
          className="shadow-lg bg-green-500 p-2 rounded-md"
          href={"dashboard/users/add"}
        >
          Add user
        </Link>
      </div>
    </>
  );
};

export default Page;
