import React from "react";
import BlogCards from "../../../components/blog-cards/BlogCards";
import Loader from "../../../components/loader/Loader";

const Main = ({ posts }) => {
  return (
    <div className="">
      <h2 className=" text-center text-6xl pb-20 screen:text-5xl mobile:text-4xl mobile:pb-10">
        Blog
      </h2>
      {posts.length ? (
        <div className="flex flex-col gap-5  max-w-[1400px] mx-auto">
          <div className="grid grid-cols-4 gap-5 mx-auto screen:gap-1 screen:grid-cols-2 mobile:grid-cols-1 mobile:w-[95%]  ">
            {posts.map((p) => (
              <BlogCards key={p._id} post={p} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Main;
