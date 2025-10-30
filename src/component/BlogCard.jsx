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

  const handleEditClick = (task) => {
    setEditTaskId(task.id);
    setEditFormData({
      title: task.title,
      subtitle: task.subtitle,
      about: task.about,
    });
    navigate(`/edit-blog/${task.id}`);
  };

  const handleView = (id) => {
    navigate(`view-blog/${id}`);
  };

  return (
    <div className="w-full mt-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tasks && tasks.length > 0 ? (
          tasks.slice(0, 3).map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold text-indigo-800 mb-1">
                    {task.title}
                  </h3>
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">
                    {task.subtitle}
                  </h4>
                  <p className="text-gray-700 text-sm line-clamp-4">
                    {task.about}
                  </p>
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleView(task.id)}
                    className="bg-indigo-600 px-4 py-1 rounded-full text-sm hover:bg-indigo-700 transition-colors"
                  >
                    View 
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No blogs</p>
        )}
      </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/view-all")}
            className="bg-blue-600 hover:bg-blue-500  font-medium px-6 py-2 rounded-lg transition-colors"
          >
            View All 
          </button>
        </div>

    </div>
  );
};

export default BlogCard;
