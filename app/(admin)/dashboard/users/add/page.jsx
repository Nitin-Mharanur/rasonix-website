"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add_Edit_UserForm from "@/components/admin/Add_Edit_UserForm";
function Page() {
  const router = useRouter();
  let obj = { name: "", email: "", password: "", role: "", phone_no: "" };
  const [detail, setDetails] = useState(obj);
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
    <Add_Edit_UserForm
      handleSubmit={handleSubmit}
      detail={detail}
      setDetails={setDetails}
      response={response}
      text="Add"
    />
  );
}

export default Page;
