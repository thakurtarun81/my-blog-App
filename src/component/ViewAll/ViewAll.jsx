import { useContext } from "react";
import { TaskContext } from "../../myContext";

const ViewAll = () => {
  const { tasks } = useContext(TaskContext);

  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-white">No blogs found.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">All Blogs</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-indigo-900">{t.title}</h2>
            <h3 className="text-lg text-indigo-600 mt-2">{t.subtitle}</h3>
            <p className="mt-4 text-gray-700">{t.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAll;
