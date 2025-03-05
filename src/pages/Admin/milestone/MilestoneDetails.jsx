import React from "react";
import { useParams } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";
import MilestoneDetailsCard from "../../../components/Admin/milestone/MilestoneDetailsCard";

const MilestoneDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/milestone/${id}`
  );

  console.log(data);
  return (
    <div className="bg-[#45496D]">
      <MilestoneDetailsCard
        milestoneDetails={data?.data}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MilestoneDetails;
