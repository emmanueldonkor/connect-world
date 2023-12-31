import Image from "next/image";
import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { addPost, selectPost } from "../public/src/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = () => {
  const CONNECT_WORLD_ENDPOINT = "http://localhost:8080/api/v1/post";
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [postInput, setPostInput] = useState('');


  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    try {
      const formData = new FormData();
      formData.append("file", imageToPost);
      formData.append("post", postInput);
      console.log("post "+ postInput)
      formData.append("name", session?.user.name);
      formData.append("email", session?.user.email);
      formData.append("profilePic", session?.user.image);

      const response = await axios.post(CONNECT_WORLD_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      inputRef.current.value = "";
      setPostInput("")
      dispatch(addPost(response.data));
      removeImage();
      console.log(response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session?.user.name.split(" ")[0]}?`}
            onChange={(e)=>setPostInput(e.target.value)}></input>
          <button hidden onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <HiOutlineVideoCamera className="text-red-500" size={20} />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <IoMdPhotos className="text-green-500" size={20} />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <BsEmojiSmile className="text-yellow-400" size={20} />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

