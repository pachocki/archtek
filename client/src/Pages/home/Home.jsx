import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import News from "./sections/News";
import Main from "./sections/Main";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://archtek.onrender.com/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className="relative w-full h-full">
      <Hero />
      <News />
      <Main posts={posts} />
    </div>
  );
};

export default Home;
