import { Controller, useForm } from "react-hook-form";
import useFetchQuery from "../../../hooks/shared/useFetch";
import toast from "react-hot-toast";
import { postData } from "../../../helpers/axios";
import { useState } from "react";
import { Button, Select, SelectItem } from "@heroui/react";

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
      setIsCreating(true);
      const res = await postData(
        `/user/assignCourse?instructorId=${data.instructor}&courseId=${data.course}`
      );
      setIsCreating(false);
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

  console.log(instructorResponse);
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl text-black font-semibold text-center mb-8">
        Assign Course to Instructor
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Course Select */}

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
              classNames={{ label: "bg-gray-300 px-3 rounded-sm" }}
            >
              {courseList.map((item) => (
                <SelectItem
                  key={item.value}
                  value={item.value}
                  className="bg-[#1F2937]"
                >
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        {errors.instructor && (
          <p className="text-red-500 text-sm mt-2">Please select a course</p>
        )}

        {/* Instructor Select */}

        <div className="py-2">
          <Controller
            name="instructor"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                {...field}
                className="w-full"
                label="Select a instructor"
                labelPlacement="outside"
                isLoading={instructoLoading}
                classNames={{ label: "bg-gray-300 px-3 rounded-sm" }}
              >
                {instructorList.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="bg-[#1F2937]"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          {errors.instructor && (
            <p className="text-red-500 text-sm mt-2">
              Please select a instructor
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="py-2">
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
        </div>
      </form>
    </div>
  );
};

export default AssignCourse;
