"use client";
import Add_edit_portfolio from "@/components/admin/Add_edit_portfolio";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const router = useRouter();
  let obj = { title: "", description: "", category_id: "", document: "" };
  const [detail, setDetails] = useState(obj);
  const [response, setResponse] = useState({});

  async function fetchData() {
    let res = await fetch(
      `http://127.0.0.1:8000/api/portfolios/${params.id}`
    ).then((res) => res.json());
    setDetails(res);
  }
  useEffect(() => {
    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(detail);
    let res = await fetch(
      `http://127.0.0.1:8000/api/portfolios/${params.id}/update`,
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
      router.push("/dashboard/portfolio");
      alert(res.message);
    }
  }

  return (
    <div className="p-4">
      <Add_edit_portfolio
        setDetails={setDetails}
        handleSubmit={handleSubmit}
        detail={detail}
        response={response}
        text="Update"
      />
    </div>
  );
};

export default Page;
