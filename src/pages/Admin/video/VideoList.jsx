import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import VideoListTable from "../../../components/Admin/video/VideoListTable";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";
import GradientButton from "../../../components/Admin/components/input/GradientButton";

const VideoList = () => {
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
    navigate(`/admin/video/${id}`);
  };

  const onEdit = (id) => {
    navigate(`/admin/video-edit/${id}`);
  };

  return (
    <div className="p-6 bg-[#45496D] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <GradientTitle title="Video List" />
        <GradientButton
          text="Create New Video"
          onClick={() => navigate("/admin/video-create")}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-20">
        <VideoListTable
          videos={data?.data}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default VideoList;
