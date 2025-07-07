import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-300 to-blue-200 flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4">
        About MyBlog
      </h1>
      <p className="max-w-3xl text-indigo-800 text-lg leading-relaxed">
        Welcome to MyBlog — a place where we share insightful articles,
        tutorials, and stories on a wide range of topics. Our mission is to
        empower readers with quality content, inspire creativity, and foster a
        vibrant community of curious minds.
      </p>
      <p className="max-w-3xl text-indigo-700 mt-6 text-md italic">
        Created with passion and dedication by the Tarun Singh.
      </p>
    </div>
  );
};

export default About;
