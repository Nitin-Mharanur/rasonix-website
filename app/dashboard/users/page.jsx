"use client"
import React from "react";
import Table from "@/components/Table";
import Link from "next/link";
const page = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/user"
  ).then((res)=>res.json());
  
  const columns = [
    {
      name:"User Name",
      selector:(row)=>row.name,
      sortable:true
    },
    {
      name:"User email",
      selector:(row)=>row.email
    },
    {
      name:"User Phone",
      selector:(row)=>row.phone_no
    },
    {
      name:"Role",
      selector:(row)=>row.role
    },
    {
      name:"Action",
      selector:(row)=><Link className="btn p-3 m-3 rounded-sm bg-yellow-500" href={`dashboard/users/${row.id}`}>Edit</Link>
    },
  
  ]
  return (
    <> 
    <div className="p-4">
      <Table columns={columns} data={res} pagination fixedHeader/>
      </div>
    </>
  );
};

export default page;
