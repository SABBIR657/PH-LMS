import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import MilestoneListTable from "../../../components/Admin/milestone/MilestoneListTable";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import { useNavigate } from "react-router-dom";
import GradientButton from "../../../components/Admin/components/input/GradientButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const MilestoneList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/milestone/all-milestones"
  );

  const onDelete = (id) => {
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

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <GradientTitle title="Milestone List" />
        <GradientButton
          text="Create New Milestone"
          onClick={() => navigate("/admin/milestone-create")}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-20">
        <MilestoneListTable
          courses={data?.data}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
          isLoading={isLoading}
          createLink="/admin/milestone-create"
        />
      </div>
    </div>
  );
};

export default MilestoneList;
