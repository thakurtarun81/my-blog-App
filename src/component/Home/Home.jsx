import React from "react";
import Testimonials from "../Testimonials/Testimonials";
import BlogCard from "../BlogCard";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-yello-400 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-white mb-3 drop-shadow-lg">
          Welcome to MyBlog
        </h1>
        <p className="text-indigo-200 text-lg max-w-xl mb-8">
          Discover amazing articles, tutorials, and stories curated just for
          you.
        </p>
      </div>
      <BlogCard />
      <div className=" text-center">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
