"use client";
import Add_edit_CategoryForm from "@/components/admin/Add_edit_CategoryForm";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [category, setCategory] = useState("");
  const [response,setResponse]=useState({})
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    
    const res = await fetch("http://127.0.0.1:8000/api/categories-add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"name":category}),
    }).then((res) => res.json());
    if(res.success){
      router.push('dashboard/category')
    }
    if(!res.success){
      setResponse(res)
    }
    
  }
  return (
    <div className="p-4">
      <Add_edit_CategoryForm
        name={category}
        setName={setCategory}
        text="Add Category"
        response={response}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
