"use client"
import Add_edit_jobForm from '@/components/admin/Add_edit_jobForm'
import React, { useEffect, useState } from 'react'

export default function Page() {
  let obj = { title: "", description: "", category_id: "", document: ""};
  const [detail,setDetails]=useState({obj});
  const [response,SetResponse]=useState({});
  const [category,setCategory]=useState();
  async function fetchCategory() {
    const res = await fetch("http://127.0.0.1:8000/api/categories").then(
      (res) => res.json()
    );
    setCategory(res);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/jobs/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...detail }),
    }).then((res) => res.json());
    SetResponse(res);
    if (res.success) {
      router.push("/dashboard/users");
      // toast.success("user added successully");
    }
  }
  useEffect(()=>{
    fetchCategory();
  },[])
  
  return (
    <div className='p-4'>
      <Add_edit_jobForm
       detail={detail}
       setDetails={setDetails}
       response={response}
       handleSubmit={handleSubmit}
       text='Add'
       categories={category}
       />
      
    </div>
  )
}
