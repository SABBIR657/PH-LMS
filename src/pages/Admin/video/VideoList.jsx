import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import VideoListTable from "../../../components/Admin/video/VideoListTable";

const VideoList = () => {
  const { data, isLoading, isSuccess, refetch } =
    useFetchQuery("/video/all-videos");

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
