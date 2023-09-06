import React from "react";
import SideBarItem from "./SideBarItem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaHome } from "react-icons/fa";

const LeftSideBar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          {session?.user.name}
        </p>
      </div>
      <SideBarItem Icon={FaHome} value="Home"/>
      <SideBarItem Icon={ImUsers} value="Friends" />
      <SideBarItem Icon={MdGroups} value="Groups" />
      <SideBarItem Icon={MdOutlineOndemandVideo} value="Watch" />
      <SideBarItem Icon={BsStopwatch} value="Memeries" />
      <SideBarItem Icon={MdOutlineExpandMore} value="See more" />
    </div>
  );
};

export default LeftSideBar;;

