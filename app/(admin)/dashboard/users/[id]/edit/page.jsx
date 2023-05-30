"use client";
import Add_Edit_UserForm from "@/components/admin/Add_Edit_UserForm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
function Page({ params }) {
  const router = useRouter();
  let obj = { name: "", email: "", password: "", role: "", phone_no: "" };
  const [detail, setDetails] = useState(obj);
  const [response, setResponse] = useState({});
  async function fetchData() {
    let res = await fetch(`http://127.0.0.1:8000/api/user/${params.id}`).then(
      (res) => res.json()
    );
    setDetails(res.details);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(detail);
    let res = await fetch(
      `http://127.0.0.1:8000/api/user/${params.id}/update`,
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
    <Add_Edit_UserForm
      setDetails={setDetails}
      handleSubmit={handleSubmit}
      detail={detail}
      response={response}
      text="Update"
    />
  );
}
export default Page;
