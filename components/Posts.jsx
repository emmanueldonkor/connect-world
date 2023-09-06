import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAllPost, selectPost } from "../public/src/features/postSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  const CONNECT_WORLD_ENDPOINT = "http://localhost:8080/api/v1/post";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(CONNECT_WORLD_ENDPOINT);
        console.log(response.data);
        dispatch(addAllPost(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;


