"use client";
import Add_edit_portfolio from "@/components/admin/Add_edit_portfolio";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  let obj = { title: "", description: "", image_url: "", status: "" };
  const [detail, setDetails] = useState(obj);
  const [response, setResponse] = useState();
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/portfolios/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...detail }),
    }).then((res) => res.json());
    setResponse(res);
    if (res.success) {
      router.push("/dashboard/portfolio");
      alert(res.message);
    }
  }
  return (
    <div className="p-4">
      <Add_edit_portfolio
        detail={detail}
        setDetails={setDetails}
        response={response}
        handleSubmit={handleSubmit}
        text="Add Portfolio"
      />
    </div>
  );
};

export default Page;
