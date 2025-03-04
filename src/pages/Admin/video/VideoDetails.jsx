import React from "react";
import { useParams } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";
import VideoDetailsCard from "../../../components/Admin/video/VideoDetailsCard";

const VideoDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, refetch } = useFetchQuery(`/video/${id}`);

  console.log(data);
  return (
    <div className="bg-[#45496D]">
      <VideoDetailsCard videoDetails={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default VideoDetails;
