import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button } from "@heroui/react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { postData } from "../../../helpers/axios";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const [isCreating, setIsCreating] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/course/all-courses"
  );

  const onSubmit = async (data) => {
    try {
      setIsCreating(true);
      const res = await postData("/course/create-course", data);
      setIsCreating(false);
      toast.success("Course created successfully");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center p-6">
      {/* Form Container */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Create Course
          </h1>

          {/* Form */}
          <Form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Course Name Field */}
            <Controller
              name="courseName"
              control={control}
              rules={{ required: "Course name is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Input
                    {...field}
                    isRequired
                    label="Course Name"
                    labelPlacement="outside"
                    // placeholder=" Course Name"
                    type="text"
                    errorMessage={errors.courseName?.message}
                    classNames={{
                      label: "text-sm font-medium text-gray-700 mb-1",
                      inputWrapper:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2", // Purple border, no background
                      input: "py-2 focus:outline-none placeholder-transparent", // Floating placeholder
                    }}
                  />
                  {/* <label
                    htmlFor="courseName"
                    className="absolute left-0 -top-5 text-sm text-gray-500 transition-all duration-300 pointer-events-none"
                  >
                    Course Name
                  </label> */}
                </div>
              )}
            />

            {/* Amount Field */}
            <Controller
              name="amount"
              control={control}
              rules={{ required: "Amount is required" }}
              render={({ field }) => (
                <div className="relative w-full ">
                  <Input
                    {...field}
                    isRequired
                    label="Amount"
                    labelPlacement="outside"
                    // placeholder=" "
                    type="number"
                    errorMessage={errors.amount?.message}
                    classNames={{
                      label: "text-sm font-medium text-gray-700 mb-1",
                      inputWrapper:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2", // Purple border, no background
                      input: "py-2 focus:outline-none placeholder-transparent", // Floating placeholder
                    }}
                  />
                  {/* <label
                    htmlFor="amount"
                    className="absolute left-0 -top-5 text-sm text-gray-500 transition-all duration-300 pointer-events-none"
                  >
                    Amount
                  </label> */}
                </div>
              )}
            />

            {/* Submit Button */}
            <Button
              disabled={isCreating}
              isLoading={isCreating}
              type="submit"
              color="primary"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Create Course
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;