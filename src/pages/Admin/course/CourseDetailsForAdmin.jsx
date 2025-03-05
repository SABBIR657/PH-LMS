import React from "react";
import CourseDetails from "../../../components/Admin/course/CourseDetails";
import { useParams } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";

const CourseDetailsForAdmin = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/course/single-course/${id}`
  );

  console.log(data);
  return (
    <div className="bg-[#45496D]">
      <CourseDetails
        courseDetails={data?.data}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default CourseDetailsForAdmin;
