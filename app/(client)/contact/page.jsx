"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function page() {
  let obj = {
    name: "",
    business_email: "",
    phone_number: "",
    message: "",
    company: "",
  };
  const [data, setData] = useState(obj);
  const [response, setResponse] = useState();
  async function store(e) {
    e.preventDefault();
    let res = await fetch("http://127.0.0.1:8000/api/contact/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    setResponse(res);
  }
  return (
    <div className="w-screen h-screen relative">
      {/* clip path div start */}
      <div className="w-full h-3/4 bg-blue-600 clip-path"></div>
      {/* clip path div end */}
      {/* form div start */}
      <div className="md:w-[85%] lg:w-[60%] md:min-h-[60%] md:gap bg-white shadow-md absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-space-between p-6 rounded">
        {/* form left div start */}
        <div className="md:w-2/4 flex flex-col justify-evenly ">
          <h1 className="text-blue-700 font-semibold text-3xl mb-1 ">
            Get In touch
          </h1>
          <p className="mb-3">We are here for you! How can we help you?</p>
          <form className="flex flex-col gap-4" onSubmit={(e) => store(e)}>
            <div className=" w-full">
              <input
                type="text"
                className="outline-0 rounded w-full bg-slate-200 p-2"
                placeholder="Enter your Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              {response?.errors?.name && <p>{response.errors.name}</p>}
            </div>
            <div>
              <input
                type="text"
                className="outline-0 rounded w-full bg-slate-200 p-2"
                placeholder="Enter your Email"
                value={data.business_email}
                onChange={(e) =>
                  setData({ ...data, business_email: e.target.value })
                }
              />
              {response?.errors?.business_email && (
                <p>{response?.errors?.business_email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                className="outline-0 rounded w-full bg-slate-200 p-2"
                placeholder="Enter your Phone no"
                value={data.phone_number}
                onChange={(e) =>
                  setData({ ...data, phone_number: e.target.value })
                }
              />
              {response?.errors?.phone_number && (
                <p>{response?.errors?.phone_number}</p>
              )}
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="6"
                className="outline-0 rounded w-full bg-slate-200 p-2"
                placeholder="Go ahead we are listening...."
                value={data.message}
                onChange={(e) => setData({ ...data, message: e.target.value })}
              ></textarea>
              {response?.errors?.message && <p>{response.errors.name}</p>}
            </div>
            <button className="bg-blue-700 text-white text-center p-2 w-full rounded text-lg">
              Submit
            </button>
          </form>
        </div>
        {/* form left div complete */}
        {/* form right div start */}
        <div className="w-2/4 flex flex-col items-center">
          <div>
            <Image
              src="/contactsvg.svg"
              alt="contact Logo"
              className="dark:invert"
              width={270}
              height={200}
              priority
            />
            <div className="flex flex-col mt-10 gap-6 ml-3">
              <div className="flex gap-4">
                <span className="border border-black rounded-[50%] p-2 text-blue-400">
                  <IoLocationSharp style={{ color: "blue" }} />
                </span>
                <p>Banglore</p>
              </div>
              <div className="flex gap-4">
                <span className="border border-black rounded-[50%] p-2">
                  <FaPhoneAlt style={{ color: "blue" }} />
                </span>
                <a href="tel:+918424838221">
                  <p>99XXXXXXXX</p>
                </a>
              </div>
              <div className="flex gap-4">
                <span className="border border-black rounded-[50%] p-2">
                  <MdEmail style={{ color: "blue" }} />
                </span>
                <a href="mailto: contact@rasonix.com">
                  <p>contact@rasonix.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* form rigth div complete */}
      </div>
      {/* form div complete */}
    </div>
    // main div complete
  );
}

export default page;
