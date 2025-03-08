/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { postData } from "../../../helpers/axios";
import toast from "react-hot-toast";
import { CiCircleRemove } from "react-icons/ci";
import GradientHoverButton from "../../../components/Admin/components/input/GradientHoverButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const defaultMcq = {
  question: "",
  options: ["", "", "", ""],
  correctAns: null,
  mark: null,
};

const QuestionCreate = () => {
  const [isCreating, setIsCreating] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      MCQSet: [defaultMcq],
    },
  });

  // Set up the useFieldArray hook
  const { fields, append, remove } = useFieldArray({
    control,
    name: "MCQSet",
  });

  const { data, isLoading } = useFetchQuery("/course/all-courses");

  const { data: milestoneResponse, isLoading: milestoneLoading } =
    useFetchQuery("/milestone/all-milestones");

  const { data: moduleResponse, isLoading: moduleLoading } = useFetchQuery(
    "/module/all-modules"
  );

  const onSubmit = async (data) => {
    const payload = {
      ...data,
      duration: parseInt(data.duration),
    };
    try {
      setIsCreating(true);
      const res = await postData("/questionPaper/createQuestionPaper", payload);
      setIsCreating(false);
      toast.success("Question created successfully");
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

  const moduleListItems =
    moduleResponse?.data?.map((item) => {
      return {
        key: item?._id,
        label: item?.moduleName,
      };
    }) || [];

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-[#45496D]">
      {/* Form Container */}
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
        <div className="p-8">
          <GradientTitle title="Create Question" />

          {/* Form */}
          <Form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Subject Name Field */}
            <Controller
              name="subject"
              control={control}
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Input
                    {...field}
                    isRequired
                    label="Subject Name"
                    labelPlacement="outside"
                    type="text"
                    errorMessage={errors.subject?.message}
                    classNames={{
                      label:
                        "text-sm font-medium bg-gray-400 px-2 rounded-sm mb-1",
                      inputWrapper:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2",
                      input: "py-2 focus:outline-none placeholder-transparent",
                    }}
                  />
                </div>
              )}
            />

            {/* Duration Field */}
            <Controller
              name="duration"
              control={control}
              rules={{ required: "Duration is required" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Input
                    {...field}
                    isRequired
                    label="Duration"
                    labelPlacement="outside"
                    type="number"
                    errorMessage={errors.duration?.message}
                    classNames={{
                      label:
                        "text-sm font-medium bg-gray-400 px-2 rounded-sm mb-1",
                      inputWrapper:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2",
                      input: "py-2 focus:outline-none placeholder-transparent",
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
                      label:
                        "text-sm font-medium bg-gray-400 px-2 rounded-sm mb-1",
                      trigger:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2",
                      popoverContent:
                        "bg-white border border-gray-300 rounded-lg",
                    }}
                  >
                    {courseListItems.map((item) => (
                      <SelectItem
                        key={item.key}
                        value={item.key}
                        className="hover:bg-purple-50 text-black"
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
                      label:
                        "text-sm font-medium bg-gray-400 px-2 rounded-sm mb-1",
                      trigger:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2",
                      popoverContent:
                        "bg-white border border-gray-300 rounded-lg",
                    }}
                  >
                    {milestoneListItems.map((item) => (
                      <SelectItem
                        key={item.key}
                        value={item.key}
                        className="hover:bg-purple-50 text-black"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />

            {/* Select Module Dropdown */}
            <Controller
              name="moduleId"
              control={control}
              rules={{ required: "Please select a module" }}
              render={({ field }) => (
                <div className="relative w-full">
                  <Select
                    {...field}
                    isRequired
                    label="Select a Module"
                    labelPlacement="outside"
                    isLoading={moduleLoading}
                    errorMessage={errors.moduleId?.message}
                    classNames={{
                      label:
                        "text-sm font-medium bg-gray-400 px-2 rounded-sm mb-1",
                      trigger:
                        "border-b-2 border-purple-500 focus:border-purple-700 transition duration-300 rounded-none p-0 bg-transparent pl-2",
                      popoverContent:
                        "bg-white border border-gray-300 rounded-lg",
                    }}
                  >
                    {moduleListItems.map((item) => (
                      <SelectItem
                        key={item.key}
                        value={item.key}
                        className="hover:bg-purple-50 text-black"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />

            {/* =====================MCQ question set=================== */}
            <div className="w-full">
              {fields.map((item, index) => (
                <div>
                  <h3 className="text-center font-bold my-2 mt-6">
                    Question no: {index + 1}
                  </h3>
                  <div
                    key={index}
                    className="flex w-full border-[3px] border-gray-300 p-2 rounded-sm my-2"
                  >
                    <div className="w-[90%] pr-2">
                      {/* Question Name */}
                      <div className="mb-4">
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Question title
                        </label>
                        <input
                          {...register(`MCQSet[${index}].question`, {
                            required: "Question is required",
                          })}
                          placeholder="What is the question?"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.MCQSet?.[index]?.question && (
                          <span className="text-red-500 text-sm">
                            {errors?.MCQSet[index].question.message}
                          </span>
                        )}
                      </div>
                      {/* Correct Answer */}
                      <div className="mb-4">
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Correct Answer
                        </label>
                        <input
                          {...register(`MCQSet[${index}].correctAns`, {
                            required: "Correct Answer",
                            valueAsNumber: true,
                          })}
                          placeholder="2"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.MCQSet?.[index]?.correctAns && (
                          <span className="text-red-500 text-sm">
                            {errors.MCQSet[index].correctAns.message}
                          </span>
                        )}
                      </div>
                      {/* Mark */}
                      <div className="mb-4">
                        <label
                          htmlFor=""
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Mark
                        </label>
                        <input
                          {...register(`MCQSet[${index}].mark`, {
                            required: "Mark is required",
                            valueAsNumber: true,
                          })}
                          placeholder="30"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors?.MCQSet?.[index]?.mark && (
                          <span className="text-red-500 text-sm">
                            {errors.MCQSet[index].mark.message}
                          </span>
                        )}
                      </div>
                      {/* Options */}
                      <div className="mb-4">
                        <h3 className="text-sm font-medium text-gray-700">
                          Options
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor=""
                              className="block text-sm font-medium text-white mb-1"
                            >
                              1
                            </label>
                            <input
                              {...register(`MCQSet[${index}].options[0]`)}
                              placeholder="Demo"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="block text-sm font-medium text-white mb-1"
                            >
                              2
                            </label>
                            <input
                              {...register(`MCQSet[${index}].options[1]`)}
                              placeholder="Demo"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="block text-sm font-medium text-white mb-1"
                            >
                              3
                            </label>
                            <input
                              {...register(`MCQSet[${index}].options[2]`)}
                              placeholder="Demo"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor=""
                              className="block text-sm font-medium text-white mb-1"
                            >
                              4
                            </label>
                            <input
                              {...register(`MCQSet[${index}].options[3]`)}
                              placeholder="Demo"
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="flex items-center justify-center w-[10%]">
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-2 bg-red-500 text-white rounded-md flex items-center justify-center"
                      >
                        {/* Remove */}
                        <CiCircleRemove size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Question Button */}
            <button
              type="button"
              className="bg-slate-400 px-3 rounded-sm"
              onClick={() => append(defaultMcq)}
            >
              Add Question
            </button>

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

export default QuestionCreate;
