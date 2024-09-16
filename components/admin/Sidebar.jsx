import React from "react";
import Link from "next/link";
import Image from "next/image";
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {BsBriefcase} from 'react-icons/bs'
import {BiCategoryAlt} from 'react-icons/bi'
const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white boredr-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center ">
            <Link href='/'>
                <div className="bg-purple-800 p-3 text-white rounded-lg inline-block">
                    <RxSketchLogo size={20}/>
                </div>
            </Link>
            <span className="border-b-[1px] border-gray-400 w-full p-2"></span>
            <Link href='/dashboard'>
                <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                    <RxDashboard size={20}/>
                </div>
            </Link>
            <Link href='/dashboard/users'>
                <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                    <RxPerson size={20}/>
                </div>
            </Link>
            <Link href='/dashboard/category'>
                <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                    <BiCategoryAlt size={20}/>
                </div>
            </Link>
            <Link href='/dashboard/jobs'>
                <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                    <BsBriefcase size={20}/>
                </div>
            </Link>

            <Link href='/dashboard/portfolio'>
                <div className="bg-gray-300 hover:bg-gray-400 p-3 cursor-pointer my-4 rounded-lg inline-block">
                    <BsBriefcase size={20}/>
                </div>
            </Link>
        </div>
      </div>
      <div className="ml-20 w-full">{children}</div>
    </div>
  );
};

export default Sidebar;
