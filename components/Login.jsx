import Image from "next/image";
import { signIn } from "next-auth/react";
("next-auth/client");

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <div></div>
      <Image
        /* src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"*/
        src="https://th.bing.com/th/id/R.6d9f2761051c9bc72510679845af2822?rik=hhf1saqWSNdyrQ&riu=http%3a%2f%2fdynamicspectrumalliance.org%2fwp-content%2fuploads%2f2020%2f01%2fConnect-World-Logo.png&ehk=kWIa3M6%2bk76irKNSwAFgbwHh78JFMshj%2bZf7624azNE%3d&risl=&pid=ImgRaw&r=0"
        height={320}
        width={250}
      />
      <a
        onClick={signIn}
        className="px-16 py-3 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white ">
        Login
      </a>
    </div>
  );
};

export default Login;
