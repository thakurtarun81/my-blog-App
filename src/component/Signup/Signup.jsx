import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import signupSchema from "../../validations/signupform";
import { yupResolver } from "@hookform/resolvers/yup";
import { TaskContext } from "../../myContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { users, setUsers } = useContext(TaskContext);
  const [passworderr, setPassworderr] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onHandleSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setPassworderr("Passwords must match");
      return;
    } else {
      setPassworderr("");
    }

    const newUser = {
      id: getId(),
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setUsers([...users, newUser]);
    toast.success("Signup successfully");
    navigate("/");
    reset();
  };

  const getId = () => {
    if (users.length === 0) return 1;
    const finalObj = users.sort((a, b) => b.id - a.id);
    return finalObj[0].id + 1;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(onHandleSubmit)} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="John Doe"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors?.fullName?.message}
            </p>
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors?.confirmPassword?.message || passworderr}
            </p>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150"
          >
            Sign up
          </button>

          <div className="text-center text-sm text-gray-500 mt-3">or</div>

          {/* Sign in Button */}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full flex justify-center rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition duration-150"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
