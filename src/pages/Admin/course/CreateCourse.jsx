import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
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
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsCreating(false);
    }
  };

  const courseListItems =
    data?.data?.map((item) => {
      return {
        key: item?._id,
        label: item?.courseName,
      };
    }) || [];

  return (
    <div className="text-black">
      <h1 className="text-center text-xl font-semibold text-grays-600 py-5 shadow-sm rounded-lg bg-gray-100 mb-4">
        Course Creation
      </h1>
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          {/* Using react-hook-form's onSubmit */}
          <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="courseName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  errorMessage={
                    errors.courseName && "Please enter a course name"
                  }
                  label="Name"
                  labelPlacement="outside"
                  placeholder="Enter your course name"
                  type="text"
                />
              )}
            />
            {/* Display errors */}
            {errors.courseName && (
              <p className="text-red-500 text-sm mt-2">
                Milestone name is required
              </p>
            )}
            <Controller
              name="amount"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  errorMessage={
                    errors.courseName && "Please enter a course amount"
                  }
                  label="Amount"
                  labelPlacement="outside"
                  placeholder="Enter amount"
                  type="number"
                />
              )}
            />
            {/* Display errors */}
            {errors.amount && (
              <p className="text-red-500 text-sm mt-2">
                Milestone name is required
              </p>
            )}

            {/* <Controller
              name="course_id"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  label="Select a course"
                  labelPlacement="outside"
                  isLoading={isLoading}
                >
                  {courseListItems.map((item) => (
                    <SelectItem key={item.key} value={item.key}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            {errors.course && (
              <p className="text-red-500 text-sm mt-2">
                Please select a course
              </p>
            )} */}

            <Button
              disabled={isCreating}
              isLoading={isCreating}
              type="submit"
              variant="solid"
              colorScheme="indigo"
              className="w-full py-2 mt-4 text-white font-semibold rounded-md shadow-md"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
