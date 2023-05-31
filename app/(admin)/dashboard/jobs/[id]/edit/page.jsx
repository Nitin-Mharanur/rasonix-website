"use client";
import Add_edit_jobForm from "@/components/admin/Add_edit_jobForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const router = useRouter;
  let obj = { title: "", description: "", category_id: "", document: ""};
  const [detail, setDetails] = useState(obj);
  const [response, setResponse] = useState({});
  async function fetchData() {
    let res = await fetch(`http://127.0.0.1:8000/api/jobs/${params.id}/edit`).then(
      (res) => res.json()
    );
    setDetails(res.details);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(detail);
    let res = await fetch(
      `http://127.0.0.1:8000/api/jobs/${params.id}/update`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      }
    ).then((res) => res.json());
    console.log(res);
    setResponse(res);
    if (res.success) {
      router.push("/dashboard/users");
      // toast.success("user added successully");
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
    <Add_edit_jobForm
    setDetails={setDetails}
    handleSubmit={handleSubmit}
    detail={detail}
    response={response}
    text="Update"
    />
  </div>
   
   
  );
}
