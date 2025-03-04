import { Controller, useForm } from "react-hook-form";
import useFetchQuery from "../../../hooks/shared/useFetch";
import toast from "react-hot-toast";
import { postData } from "../../../helpers/axios";
import { useState } from "react";
import { Button, Select, SelectItem } from "@heroui/react";
import GradientHoverButton from "../../../components/Admin/components/input/GradientHoverButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const AssignCourse = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { data: courseResponse, isLoading: courseLoading } = useFetchQuery(
    "/course/all-courses"
  );
  const { data: instructorResponse, isLoading: instructoLoading } =
    useFetchQuery("/user/getAllInstructors");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    setIsCreating(true);
    try {
      const res = await postData(
        `/user/assignCourse?instructorId=${data.instructor}&courseId=${data.course}`
      );
      toast.success("Course assigned successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to assign course.");
    } finally {
      setIsCreating(false);
    }
  };

  const courseList =
    courseResponse?.data?.map((item) => {
      return { value: item?._id, label: item?.courseName };
    }) || [];

  const instructorList =
    instructorResponse?.data?.map((item) => {
      return { value: item?._id, label: item?.user?.name };
    }) || [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#45496D] p-6">
      <div className="max-w-lg w-full bg-slate-50 rounded-xl shadow-2xl p-8 space-y-6">
        <GradientTitle title="Assign Course to Instructor" />

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10  ">
          {/* Course Select */}
          <div>
            <Controller
              name="course"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  label="Select a course"
                  labelPlacement="outside"
                  isLoading={courseLoading}
                  classNames={{
                    label: "text-sm font-medium text-black mb-1",
                    trigger: "bg-white border border-gray-300 rounded-lg p-3",
                    popoverContent:
                      "bg-white border border-gray-300 rounded-lg",
                  }}
                >
                  {courseList.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="hover:bg-indigo-50 text-black data-[selected=true]:bg-indigo-500 data-[selected=true]:text-white"
                    >
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
            )}
          </div>

          {/* Instructor Select */}
          <div>
            <Controller
              name="instructor"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  className="w-full"
                  label="Select an instructor"
                  labelPlacement="outside"
                  isLoading={instructoLoading}
                  classNames={{
                    label: "text-sm font-medium text-gray-700 mb-1",
                    trigger: "bg-white border border-gray-300 rounded-lg p-3",
                    popoverContent:
                      "bg-white border border-gray-300 rounded-lg",
                  }}
                >
                  {instructorList.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="hover:bg-indigo-50 text-black data-[selected=true]:bg-indigo-500 data-[selected=true]:text-white"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            {errors.instructor && (
              <p className="text-red-500 text-sm mt-2">
                Please select an instructor
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <GradientHoverButton
              disabled={isCreating}
              isLoading={isCreating}
              type="submit"
              text="Assign"
              className={"w-full"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignCourse;
