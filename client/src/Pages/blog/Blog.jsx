import React, { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import { useLocation } from "react-router-dom";
import Main from "../home/sections/Main";
import axios from "axios";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div>
      <Hero />
      <div className="pt-5">
      <Main posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
