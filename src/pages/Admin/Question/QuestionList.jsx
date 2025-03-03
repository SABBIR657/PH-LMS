import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import VideoListTable from "../../../components/Admin/video/VideoListTable";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import QuestionListTable from "../../../components/Admin/Question/QuestionListTable";

const QuestionList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } =
    useFetchQuery("/video/all-videos");

  const onDelete = async (id) => {
    showDeleteConfirmation().then(async (result) => {
      if (result.isConfirmed) {
        let loadId = toast.loading("Deleting.....");
        try {
          const response = await deleteData(`/video/${id}`);
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
    navigate(`/admin/question/${id}`);
  };

  const onEdit = (id) => {
    navigate(`/admin/question-edit/${id}`);
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Question List</h1>
        <button
          onClick={() => navigate("/admin/question-create")}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Create New Question
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-20">
        {isLoading ? (
          <div className="p-6 flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <QuestionListTable
            videos={data?.data}
            onDelete={onDelete}
            onView={onView}
            onEdit={onEdit}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionList;
