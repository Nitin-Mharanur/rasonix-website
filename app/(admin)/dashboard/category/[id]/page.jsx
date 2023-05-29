'use client';
import Add_edit_CategoryForm from '@/components/admin/Add_edit_CategoryForm';
import React, { useEffect, useState } from 'react'

const Page = ({params}) => {
    const [name,setName]=useState('');
    const [response,setResponse]=useState({});
     

    async function fetchData() {
        let res = await fetch(`http://127.0.0.1:8000/api/categories/${params.id}`).then(
          (res) => res.json()
        );
        setName(res.name);
      }
      async function handleSubmit(e) {
        e.preventDefault();
        let res = await fetch(
          `http://127.0.0.1:8000/api/categories/${params.id}/update`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(name),
          }
        ).then((res) => res.json());
        console.log(res);
        setName(res);
        if (res.success) {
          router.push("/dashboard/category");
          // toast.success("user added successully");
        }
      }
      useEffect(() => {
        fetchData();
      }, []);
    

  return (
    <div>
        <Add_edit_CategoryForm
        name={name}
        setName={setName}
        text='Update'
        response={response}
        handleSubmit={handleSubmit}
        />
    </div>
  )
}

export default Page
