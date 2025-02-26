import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@heroui/react";
import toast, { Toaster } from "react-hot-toast";
import { postData } from "../../../helpers/axios";

const CreateInstructor = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s",
    };

    console.log(payload);
    try {
      setIsCreating(true);
      const res = await postData("/user/createInstructer", payload);
      setIsCreating(false);
      toast.success("Instructor created successfully", {
        position: "top-right",
      });
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { position: "top-right" });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-black font-semibold text-center mb-6">
        Instructor Creation Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Image Field */}
        {/* <div className="mb-4">
          <label
            htmlFor="img"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Image
          </label>
          <input
            id="img"
            type="file"
            accept="image/*"
            className="mt-2 block w-full text-sm text-gray-500 file:py-2 file:px-4 file:border file:rounded-md file:text-sm file:bg-gray-100 file:text-gray-700"
            {...register("img", { required: "Image is required" })}
          />
          {errors.img && (
            <p className="text-red-500 text-sm">{errors.img.message}</p>
          )}
        </div> */}

        {/* Mobile Number Field */}
        <div className="mb-4">
          <label
            htmlFor="mobileNo"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            id="mobileNo"
            type="text"
            placeholder="Enter your mobile number"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.mobileNo ? "border-red-500" : "border-gray-300"
            }`}
            {...register("mobileNo", {
              required: "Mobile number is required",
              // pattern: {
              //   value: /^[0-9]{10}$/,
              //   message: "Please enter a valid 10-digit mobile number",
              // },
            })}
          />
          {errors.mobileNo && (
            <p className="text-red-500 text-sm">{errors.mobileNo.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              placeholder="Enter your password"
              className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {/* Eye icon to toggle password visibility */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)} // Toggle the state
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {/* Submit Button */}
        <div>
          <Button
            disabled={isCreating}
            isLoading={isCreating}
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default CreateInstructor;
