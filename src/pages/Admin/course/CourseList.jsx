import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import CourseListTable from "../../../components/Admin/course/CourseListTable";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";

import GradientButton from "../../../components/Admin/components/input/GradientButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const CourseList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/course/all-courses"
  );

  const onDelete = async (id) => {
    showDeleteConfirmation().then(async (result) => {
      if (result.isConfirmed) {
        let loadId = toast.loading("Deleting.....");
        try {
          const response = await deleteData(`/course/delete-course/${id}`);
          toast.dismiss(loadId);
          toast.success("Deleted successfully");
          refetch();
        } catch (error) {
          toast.error("Something went wrong");
        } finally {
          toast.dismiss(loadId);
        }
      }
    });
  };

  const onView = (id) => {
    navigate(`/admin/course/${id}`);
  };

  const onEdit = (id) => {
    navigate(`/admin/course-edit/${id}`);
  };

  return (
    <div className="p-6 bg-[#45496D] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <GradientTitle title="Course List" />
        <GradientButton
          text="Create New Course"
          onClick={() => navigate("/admin/course-create")}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-20">
        <CourseListTable
          courses={data?.data}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CourseList;
