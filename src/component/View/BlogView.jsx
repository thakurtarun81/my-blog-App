import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../../myContext";

const BlogView = () => {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);
  const blog = tasks.find((t) => t.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-white">Blog not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold text-indigo-900">{blog.title}</h1>
      <h2 className="text-xl text-indigo-700 mt-2">{blog.subtitle}</h2>
      <p className="mt-4 text-gray-800 max-w-3xl mx-auto">{blog.about}</p>
    </div>
  );
};

export default BlogView;
