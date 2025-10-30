import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TaskContext } from "../../myContext";
import Back from "../Back";
import Header from "../Header/Header";

const BlogView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useContext(TaskContext);
  const blog = tasks.find((t) => t.id === parseInt(id));

  if (!blog) {
    return <p className="text-center text-white">Blog not found.</p>;
  }

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
    navigate("/");
  };

const handleEditClick = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      {/* <Header/> */}
      <div className="text-left">
        <Back />
      </div>
      <h1 className="text-3xl font-bold text-indigo-900">{blog.title}</h1>
      <h2 className="text-xl text-indigo-900 mt-2">{blog.subtitle}</h2>
      <p className="text-xl text-indigo-900 mt-2">{blog.about}</p>
      <p className="text-xl text-indigo-900 mt-2">{"Created by: " + blog.name}</p>

      <div>
         <button
          onClick={() => handleEditClick(blog.id)}
          className=""
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteTask(blog.id)}
          className=""
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default BlogView;
