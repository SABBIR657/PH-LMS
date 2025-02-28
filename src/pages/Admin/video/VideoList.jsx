import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import VideoListTable from "../../../components/Admin/video/VideoListTable";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";

const VideoList = () => {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, refetch } =
    useFetchQuery("/video/all-videos");

  const onDelete = (id) => {
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
    console.log(id);
  };

  console.log(data);
  return (
    <div>
      <h1 className="text-center text-xl font-semibold text-grays-600 py-5 shadow-sm rounded-lg bg-gray-100 mb-4">
        Video List
      </h1>
      <VideoListTable
        courses={data?.data}
        onDelete={onDelete}
        onView={onView}
        onEdit={onEdit}
        isLoading={isLoading}
        createLink="/admin/video-create"
      />
    </div>
  );
};

export default VideoList;
