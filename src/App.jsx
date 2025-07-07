import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Blog from "./component/Blog/Blog";
import Header from "./component/Header/Header";
import { TaskContext } from "./myContext";
import BlogView from "./component/View/BlogView";
import ViewAll from "./component/ViewAll/ViewAll";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Header />
        <Blog />
      </>
    ),
  },
  {
    path: "/view-blog/:id",
    element: (
      <>
        <Header />
        <BlogView />
      </>
    ),
  },
  {
    path: "/view-all",
    element: (
      <>
        <Header />
        <ViewAll />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
]);
function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  const notify = () => toast.success("This is a success message!");
  const getTasks = () => {
    const blogsdata = localStorage.getItem("blogsdata");
    return blogsdata ? JSON.parse(blogsdata) : [];
  };

  const modifyTasks = (data) => {
    setTasks(data);
    localStorage.setItem("blogsdata", JSON.stringify(data));
  };

  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const modifyUsers = (data) => {
    setUsers(data);
    localStorage.setItem("users", JSON.stringify(data));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: getTasks(),
        setTasks: modifyTasks,
        users: getUsers(),
        setUsers: modifyUsers,
      }}
    >
      <ToastContainer />
      <RouterProvider router={router} />
    </TaskContext.Provider>
  );
}

export default App;
