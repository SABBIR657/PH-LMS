import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import MilestoneListTable from "../../../components/Admin/milestone/MilestoneListTable";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import { useNavigate } from "react-router-dom";

const MilestoneList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/milestone/all-milestones"
  );

  const onDelete = (id) => {
    console.log("calling delete");
    showDeleteConfirmation().then(async (result) => {
      if (result.isConfirmed) {
        let loadId = toast.loading("Deleting.....");
        try {
          const response = await deleteData(`/milestone/${id}`);
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
    navigate(`/admin/milestone/${id}`);
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
