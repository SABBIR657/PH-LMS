import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { postData } from "../../../helpers/axios";
import toast from "react-hot-toast";
import GradientHoverButton from "../../../components/Admin/components/input/GradientHoverButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const ModuleCreate = () => {
  const [isCreating, setIsCreating] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data, isLoading } = useFetchQuery("/course/all-courses");
  const { data: milestoneResponse, isLoading: milestoneLoading } =
    useFetchQuery("/milestone/all-milestones");

  const onSubmit = async (data) => {
    try {
      setIsCreating(true);
      const res = await postData("/module/create-module", data);
      setIsCreating(false);
      toast.success("Module created successfully");
      reset(); // Reset the form after successful submission
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

  const milestoneListItems =
    milestoneResponse?.data?.map((item) => {
      return {
        key: item?._id,
        label: item?.milestoneName,
      };
    }) || [];

  return (
    <div className="bg-slate-100 min-h-screen flex justify-center items-center p-6">
      {/* Form Container */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="p-8">
          <GradientTitle title="Create Module" />

          {/* Form */}
          <Form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Module Name Field */}
            <Controller
              name="moduleName"
              control={control}
              rules={{ required: "Module name is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Input
                    {...field}
                    isRequired
                    label="Module Name"
                    labelPlacement="outside"
                    type="text"
                    errorMessage={errors.moduleName?.message}
                    classNames={{
                      label: "text-sm font-medium text-gray-700 mb-1",
                      inputWrapper:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2", // Purple border, no background
                      input: "py-2 focus:outline-none placeholder-transparent", // Floating placeholder
                    }}
                  />
                </div>
              )}
            />

            {/* Select Course Dropdown */}
            <Controller
              name="course_id"
              control={control}
              rules={{ required: "Please select a course" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Select
                    {...field}
                    isRequired
                    label="Select a Course"
                    labelPlacement="outside"
                    isLoading={isLoading}
                    errorMessage={errors.course_id?.message}
                    classNames={{
                      label: "text-sm font-medium text-gray-700 mb-1",
                      trigger:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2", // Purple border, no background
                      popoverContent:
                        "bg-white border border-gray-300 rounded-lg",
                    }}
                  >
                    {courseListItems.map((item) => (
                      <SelectItem
                        key={item.key}
                        value={item.key}
                        className="hover:bg-purple-50 text-black" // Hover effect for dropdown items
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />

            {/* Select Milestone Dropdown */}
            <Controller
              name="milestoneId"
              control={control}
              rules={{ required: "Please select a milestone" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Select
                    {...field}
                    isRequired
                    label="Select a Milestone"
                    labelPlacement="outside"
                    isLoading={milestoneLoading}
                    errorMessage={errors.milestoneId?.message}
                    classNames={{
                      label: "text-sm font-medium text-gray-700 mb-1",
                      trigger:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2", // Purple border, no background
                      popoverContent:
                        "bg-white border border-gray-300 rounded-lg",
                    }}
                  >
                    {milestoneListItems.map((item) => (
                      <SelectItem
                        key={item.key}
                        value={item.key}
                        className="hover:bg-purple-50 text-black" // Hover effect for dropdown items
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />

            {/* Submit Button */}
            <GradientHoverButton
              disabled={isCreating}
              isLoading={isCreating}
              type="submit"
              text="Create"
              className={"w-full"}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ModuleCreate;
