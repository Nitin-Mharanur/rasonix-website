"use client";
import Table from "@/components/Table";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const [jobs, setJobs] = useState([]);
  async function fetchJobs() {
    const res = await fetch("http://127.0.0.1:8000/api/jobs").then((res) =>
      res.json()
    );
    setJobs(res.data);
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Category",
      selector: (row) => row.categories_id,
    },
    {
      name: "Document",
      selector: (row) => row.document,
    },
    {
      name: `Action's`,
      selector: (row) => (
        <div className="flex gap-2">
          <Link
            className="p-2  rounded-md bg-yellow-500"
            href={`/dashboard/jobs/${row.id}/edit`}
          >
            Edit
          </Link>
          <button className="bg-red-900 p-2 rounded-sm" onClick={(e)=>handleDelete(row.id)}>
           Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="p-4">
        <Table columns={columns} data={jobs} pagination fixedHeader />
      </div>
      <div className="absolute top-[80%] right-4">
        <Link
          className="shadow-lg bg-green-500 p-2 rounded-md"
          href={"dashboard/jobs/add"}
        >
          Add Jobs
        </Link>
      </div>
    </>
  );
}

export default Page;
