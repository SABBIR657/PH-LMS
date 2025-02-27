import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { postData } from "../../../helpers/axios";
import toast from "react-hot-toast";

const VideoCreate = () => {
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
  const { data: moduleResponse, isLoading: moduleLoading } = useFetchQuery(
    "/module/all-modules"
  );

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsCreating(true);
      const res = await postData("/video/create-video", data);
      setIsCreating(false);
      toast.success("Video created successfully");
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

  console.log("moduleResponse", moduleResponse);

  return (
    <div className="text-black">
      <h1 className="text-center text-xl font-semibold text-grays-600 py-5 shadow-sm rounded-lg bg-gray-100 mb-4">
        Video Creation
      </h1>
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
          {/* Using react-hook-form's onSubmit */}
          <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="videoName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  errorMessage={errors.videoName && "Please enter a video name"}
                  label="Video Name"
                  labelPlacement="outside"
                  placeholder="Enter your video name"
                  type="text"
                />
              )}
            />
            {/* Display errors */}
            {errors.videoName && (
              <p className="text-red-500 text-sm mt-2">
                Video name is required
              </p>
            )}
            <Controller
              name="videoURL"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  isRequired
                  errorMessage={errors.videoURL && "Please enter a module name"}
                  label="Video URL"
                  labelPlacement="outside"
                  placeholder="Enter your video url"
                  type="text"
                  className="mt-1"
                />
              )}
            />
            {/* Display errors */}
            {errors.videoURL && (
              <p className="text-red-500 text-sm mt-2">Video URL is required</p>
            )}

            <Controller
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
            {errors.course_id && (
              <p className="text-red-500 text-sm mt-2">
                Please select a course
              </p>
            )}

            <Controller
              name="milestoneId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  label="Select a milestone"
                  labelPlacement="outside"
                  isLoading={milestoneLoading}
                >
                  {milestoneListItems.map((item) => (
                    <SelectItem key={item.key} value={item.key}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            {errors.milestoneId && (
              <p className="text-red-500 text-sm mt-2">
                Please select a milestone
              </p>
            )}

            <Controller
              name="moduleId"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  label="Select a module"
                  labelPlacement="outside"
                  isLoading={moduleLoading}
                >
                  {moduleListItems.map((item) => (
                    <SelectItem key={item.key} value={item.key}>
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            {errors.moduleId && (
              <p className="text-red-500 text-sm mt-2">
                Please select a module
              </p>
            )}

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

export default VideoCreate;
