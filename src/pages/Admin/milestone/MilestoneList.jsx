import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import MilestoneListTable from "../../../components/Admin/milestone/MilestoneListTable";

const MilestoneList = () => {
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/milestone/all-milestones"
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
        Milestone List
      </h1>
      <MilestoneListTable
        courses={data?.data}
        onDelete={onDelete}
        onView={onView}
        onEdit={onEdit}
        isLoading={isLoading}
        createLink="/admin/milestone-create"
      />
    </div>
  );
};

export default MilestoneList;
