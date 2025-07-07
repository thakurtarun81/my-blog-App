import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BlogSchema from "../../validations/createblog";
import { TaskContext } from "../../myContext";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  // const [tasks, setTasks] = useState([]);
  const { tasks, setTasks } = useContext(TaskContext);
  console.log(tasks);
  const navigate = useNavigate();

  useEffect(() => {
    gettoken();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(BlogSchema) });

  const handleAddTask = (data) => {
    const newBlog = {
      id: Date.now(),
      ...data,
    };

    setTasks([newBlog, ...tasks]);

    reset({ title: "", subtitle: "", about: "" });
    navigate("/");
  };

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const gettoken = () => {
    const token = localStorage.getItem("user");
    if (!token) {
      navigate("/login");
    }
    console.log(token);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 text-center">
          Create Blog
        </h2>

        <form onSubmit={handleSubmit(handleAddTask)} className="space-y-4">
          <input
            type="text"
            // value={title}
            name="title"
            placeholder="Enter blog title"
            // onChange={(e) => setTitle(e.target.value)}

            {...register("title")}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {errors?.title?.message}
          </span>
          <input
            type="text"
            name="subtitle"
            // value={subtitle}
            placeholder="Enter blog subtitle"
            // onChange={(e) => setSubtitle(e.target.value)}
            {...register("subtitle")}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {errors?.subtitle?.message}
          </span>
          <textarea
            // value={about}
            name="about"
            placeholder="Enter blog description"
            // onChange={(e) => setAbout(e.target.value)}
            {...register("about")}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <span style={{ color: "red", fontSize: "0.9rem" }}>
            {errors?.about?.message}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full bg-indigo-400 hover:text-red-800 bg-indigo-600font-semibold py-2 rounded-md transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-indigo-400 hover:text-red-800 bg-indigo-600font-semibold py-2 rounded-md transition-colors duration-300"
            >
              Add Blog
            </button>
          </div>
        </form>

        {/* <ul className="mt-8 space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="bg-indigo-50 rounded-md p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-lg font-bold text-indigo-900">
                    {task.title}
                  </h5>
                  <h6 className="font-semibold text-indigo-700">
                    {task.subtitle}
                  </h6>
                  <p className="mt-1 text-gray-700">{task.about}</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-600 hover:text-red-800 font-semibold text-sm"
                  >
                    Delete
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
                    View
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Blog;
