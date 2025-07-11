import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TaskContext } from "../../myContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Loginschema from "../../validations/loginform";
import { toast } from "react-toastify";

const Login = () => {
  const { users, setUsers } = useContext(TaskContext);
  const navigate = useNavigate();

  useEffect(() => {
    getuser();
  }, []);

  const getuser = () => {
    const existuser = localStorage.getItem("user");
    console.log(existuser);
    if (existuser) {
      navigate("/");
    }
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
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
    <div>
      <div>
        <ToastContainer />
      </div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-6">
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
                <div className="mt-2">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    id="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <span style={{ color: "red", fontSize: "0.9rem" }}>
                  {errors?.password?.message}
                </span>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-red shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={() => navigate("/signup")}
              className="bg-amber-300 flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-red shadow-xs hover:bg-red-500 focus-visible:outline-2  focus-visible:outline-red-400"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
