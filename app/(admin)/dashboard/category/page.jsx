"use client";
import Table from "@/components/Table";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page() {
  const [category, setCategory] = useState([]);
  
  async function fetchCategory() {
    const res = await fetch("http://127.0.0.1:8000/api/categories").then(
      (res) => res.json()
    );
    setCategory(res);
  }

  async function handleDelete(id){
   let data = await fetch(`http://127.0.0.1:8000/api/categories/${id}/delete`,{
    method:'DELETE'
   }).then(
      (res) => res.json()
    );
    setCategory(res.category)
    if(res.success){
      alert(res.message)
    }
  }
  
  useEffect(() => {
    fetchCategory();
  }, []);
  const columns = [
    {
      name: "Category Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2">
          <Link
            className="p-2  rounded-md bg-yellow-500"
            href={`/dashboard/category/${row.id}/edit`}
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
        <Table columns={columns} data={category} pagination fixedHeader />
      </div>
      <div className="absolute top-[80%] right-4">
        <Link
          className="shadow-lg bg-green-500 p-2 rounded-md"
          href={"dashboard/category/add"}
        >
          Add Category
        </Link>
      </div>
    </>
  );
}

export default Page;
