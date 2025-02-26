import { useForm } from "react-hook-form";
import { postData } from "../../../helpers/axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { Button } from "@heroui/react";
import AssignCourse from "./AssignCourse";

const CreateCourse = () => {
  const [isCreating, setIsCreating] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsCreating(true);
      const res = await postData("/course/create-course", data);
      toast.success("Course created successfully", { position: "top-right" });
      setIsCreating(false);
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create course.");
      setIsCreating(false);
    }
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-black font-semibold text-center mb-6">
        Create Course
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Course Name Field */}
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-sm font-medium tex-black"
          >
            Course Name
          </label>
          <input
            id="courseName"
            type="text"
            placeholder="Enter Course Name"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.courseName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("courseName", { required: "Course Name is required" })}
          />
          {errors.courseName && (
            <p className="text-red-500 text-sm">{errors.courseName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-sm font-medium text-gray-700"
          >
            Course Amount
          </label>
          <input
            id="courseName"
            type="text"
            placeholder="Enter Course Amount"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.courseName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("amount", { required: "Amount is required" })}
          />
          {errors.courseName && (
            <p className="text-red-500 text-sm">{errors.courseName.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            isLoading={isCreating}
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create Course
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
