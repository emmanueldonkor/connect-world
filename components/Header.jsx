import Image from "next/image";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillMessage, AiFillBell, AiOutlineShop } from "react-icons/ai";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { useSession, signOut } from "next-auth/react";


const Header = () => {
  const { data: session, status } = useSession();
  return (
    <div className="sticky z-50 flex h-20 bg-white items-center p-2 shadow-md top-0 h-">
      {/* Left */}
      <div className="flex min-w-fit p-2 ">
        <Image
          src="https://th.bing.com/th/id/R.6d9f2761051c9bc72510679845af2822?rik=hhf1saqWSNdyrQ&riu=http%3a%2f%2fdynamicspectrumalliance.org%2fwp-content%2fuploads%2f2020%2f01%2fConnect-World-Logo.png&ehk=kWIa3M6%2bk76irKNSwAFgbwHh78JFMshj%2bZf7624azNE%3d&risl=&pid=ImgRaw&r=0"
          height={80}
          width={200}
        />


      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center space-x-3 px-2 ml-2 rounded-full bg-gray-100 text-gray-500 p-2 ">
            <HiOutlineSearch size={20} />
            <input
              className="hidden lg:inline-flex bg-transparent focus:outline-none outline-none flex-shrink  w-[27rem]"
              type="text"
              placeholder="search for creators,inspirations and projects"
            />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2 justify-end min-w-fit">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          onClick={signOut}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name.split(" ")[0]}
        </p>
        <CgMenuGridO
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillMessage
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <AiFillBell
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
        <MdOutlineExpandMore
          size={20}
          className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
