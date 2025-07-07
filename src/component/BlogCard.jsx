import React, { useContext, useState } from "react";
import { TaskContext } from "../myContext";
import { useNavigate } from "react-router-dom";

const BlogCard = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    subtitle: "",
    about: "",
  });
  const navigate = useNavigate();

  const handleDeleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task.id !== idToDelete));
  };

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setEditFormData({
      title: task.title,
      subtitle: task.subtitle,
      about: task.about,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...editFormData } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
  };
  const handleView = (id) => {
    navigate(`view-blog/${id}`);
  };

  return (
    <div className="blog-head w-full mt-6">
      <div className="text-white space-y-4 w-full text-center flex gap-4 flex-wrap">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="bg-indigo-50 rounded-md p-1  shadow-sm text-center w-1/4"
            >
              {editTaskId === task.id ? (
                <div className="flex flex-col space-y-2">
                  <input
                    type="text"
                    name="title"
                    value={editFormData.title}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    name="subtitle"
                    value={editFormData.subtitle}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="Subtitle"
                  />
                  <textarea
                    name="about"
                    value={editFormData.about}
                    onChange={handleInputChange}
                    className="p-2 border rounded"
                    placeholder="About"
                  />
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleSaveClick(task.id)}
                      className="text-green-600 hover:text-green-800 font-semibold text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditTaskId(null)}
                      className="text-black-600 hover:text-gray-800 font-semibold text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
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
                    <button
                      onClick={() => handleEditClick(task)}
                      className="text-yellow-600 hover:text-yellow-800 font-semibold text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleView(task.id)}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                    >
                      View
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        ) : (
          <p>No blogs</p>
        )}
        <button
          onClick={() => navigate("/view-all")}
          className="bg-blue-300 text-black px-4 py-2 h-10 mb-4 mt-21 rounded hover:bg-blue-200"
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
