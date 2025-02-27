import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import CourseListTable from "../../../components/Admin/course/CourseListTable";

const CourseList = () => {
  const userName = Cookies.get("userName");
  const role = Cookies.get("userRole");
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/course/all-courses"
  );

  const onDelete = (id) => {
    console.log(id);
  };
  const onView = (id) => {
    console.log(id);
  };
  const onEdit = (id) => {
    console.log(id);
  };

  console.log(data);
  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-grays-600 py-5 shadow-sm rounded-lg bg-gray-100 mb-4">
        Course List
      </h1>
      <CourseListTable
        courses={data?.data}
        onDelete={onDelete}
        onView={onView}
        onEdit={onEdit}
        isLoading={isLoading}
        createLink="/admin/create-course"
      />
    </div>
  );
};

export default CourseList;
