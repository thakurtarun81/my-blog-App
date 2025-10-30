import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { TaskContext } from "../../myContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Loginschema from "../../validations/loginform";

const Login = () => {
  const { users } = useContext(TaskContext);
  const navigate = useNavigate();

  useEffect(() => {
    getuser();
  }, []);

  const getuser = () => {
    const existuser = localStorage.getItem("user");
    if (existuser) {
      navigate("/");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Loginschema),
    defaultValues: { email: "", password: "" },
  });

  const onHandleSubmit = (data) => {
    const matchedUser = users.find((user) => user.email === data.email);
    if (!matchedUser) {
      toast.error("User not found.");
      return;
    }

    if (matchedUser.password !== data.password) {
      toast.error("Incorrect password");
      return;
    } else {
      localStorage.setItem("user", JSON.stringify(matchedUser));
      toast.success("Login successfully");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 sm:p-10">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onHandleSubmit)}
          className="mt-8 space-y-6"
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors?.email?.message}
            </p>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors?.password?.message}
            </p>
          </div>

          {/* Forgot Password */}
          <div className="flex items-center justify-end">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign in Button */}
          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
          >
            Sign in
          </button>
        </form>

        {/* Sign up Button */}
        <div className="mt-4">
          <button
            onClick={() => navigate("/signup")}
            className="w-full flex justify-center rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition duration-150"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
