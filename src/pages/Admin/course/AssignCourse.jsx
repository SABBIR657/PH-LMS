import { useForm } from "react-hook-form";
import useFetchQuery from "../../../hooks/shared/useFetch";
import toast from "react-hot-toast";
import { postData } from "../../../helpers/axios";
import { useState } from "react";
import { Button } from "@heroui/react";

const AssignCourse = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { data: courseResponse } = useFetchQuery("/course/all-courses");
  const { data: instructorResponse } = useFetchQuery("/user/getAllInstructors");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Mock data for courses and instructors (replace with dynamic data as needed)
  const courses = [
    { value: "", label: "Select a Course" },
    { value: "course1", label: "Course 1" },
    { value: "course2", label: "Course 2" },
    { value: "course3", label: "Course 3" },
  ];

  const instructors = [
    { value: "", label: "Select an Instructor" },
    { value: "instructor1", label: "Instructor 1" },
    { value: "instructor2", label: "Instructor 2" },
    { value: "instructor3", label: "Instructor 3" },
  ];

  // Handle form submission
  const onSubmit = async (data) => {
    setIsCreating(true);
    try {
      setIsCreating(true);
      //   const res = await postData(
      //     `/user/assignCourse?instructorId=${data.instructor}&courseId=${data.course}`
      //   );
      setIsCreating(false);
      toast.success("Course and Instructor selected successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to select course and instructor.");
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
      <h2 className="text-2xl text-black font-semibold text-center mb-6">
        Assign Course to Instructor
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Course Select */}
        <div className="mb-4">
          <label
            htmlFor="course"
            className="block text-sm font-medium text-gray-700"
          >
            Course
          </label>
          <select
            id="course"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.course ? "border-red-500" : "border-gray-300"
            }`}
            {...register("course", { required: "Course is required" })}
          >
            <option value="">Select a Course</option>
            {courseList?.map((course) => (
              <option key={course.value} value={course.value}>
                {course.label}
              </option>
            ))}
          </select>
          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course.message}</p>
          )}
        </div>

        {/* Instructor Select */}
        <div className="mb-4">
          <label
            htmlFor="instructor"
            className="block text-sm font-medium text-gray-700"
          >
            Instructor
          </label>
          <select
            id="instructor"
            className={`mt-2 block w-full text-black px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
              errors.instructor ? "border-red-500" : "border-gray-300"
            }`}
            {...register("instructor", { required: "Instructor is required" })}
          >
            <option value="">Select a Instructor</option>
            {instructorList.map((instructor) => (
              <option key={instructor.value} value={instructor.value}>
                {instructor.label}
              </option>
            ))}
          </select>
          {errors.instructor && (
            <p className="text-red-500 text-sm">{errors.instructor.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            isLoading={isCreating}
            disabled={isCreating}
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Assign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AssignCourse;
