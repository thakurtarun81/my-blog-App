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
      setPassworderr("password must be same");
      return;
    } else {
      setPassworderr("");
    }
    // setUsers()
    let newUser = {
      id: getId(),
      fullName: data?.fullName,
      email: data?.email,
      password: data?.password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUsers([...users, newUser]);
    toast.success("Signup successfully");
    navigate("/");
  };

  const getId = () => {
    if (users.length == 0) {
      return 1;
    }
    let finalObj = users.sort((a, b) => b.id - a.id);
    return finalObj[0].id + 1;
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onHandleSubmit)}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  autoComplete="name"
                  {...register("fullName")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors?.fullName?.message}
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  {...register("email")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors?.email?.message}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors?.password?.message}
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password2"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Confirm Your Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  autoComplete="current-password"
                  {...register("confirmPassword")}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors?.confirmPassword?.message || passworderr}
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="bg-amber-300 flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-red shadow-xs hover:bg-red-500 focus-visible:outline-2  focus-visible:outline-red-400"
              >
                Sign up
              </button>
            </div>
            <div className="text-center  justify-center">or</div>
            <div>
              <button
                onClick={() => navigate("/login")}
                className="bg-amber-300 flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-red shadow-xs hover:bg-red-500 focus-visible:outline-2  focus-visible:outline-red-400"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
