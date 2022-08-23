import React from "react";
import Post from "./Post";

const Blog = () => {
  return (
    <div className="container mx-auto px-10 md:px-5 lg:px-2.5 mb-14">
      <div className="text-center my-20">
        <p className="text-primary text-sm font-bold mb-2.5">Practice Advice</p>
        <h1 className="font-bold text-[40px] text-[#252B42]">Featured Posts</h1>
      </div>
      <div className="grid gap-[30px] grid-cols-1 lg:grid-cols-2">
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Blog;
