import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import ModuleListTable from "../../../components/Admin/module/ModuleListTable";
import { showDeleteConfirmation } from "../../../lib/alertUtils";
import toast from "react-hot-toast";
import { deleteData } from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";
import GradientButton from "../../../components/Admin/components/input/GradientButton";
import GradientTitle from "../../../components/Admin/components/typography/GradientTitle";

const ModuleList = () => {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/module/all-modules"
  );

  const onDelete = async (id) => {
    showDeleteConfirmation().then(async (result) => {
      if (result.isConfirmed) {
        let loadId = toast.loading("Deleting.....");
        try {
          const response = await deleteData(`/module/${id}`);
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
    navigate(`/admin/module/${id}`);
  };

  const onEdit = (id) => {
    navigate(`/admin/module-edit/${id}`);
  };

  return (
    <div className="p-6 bg-[#45496D] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <GradientTitle title="Module List" />
        <GradientButton
          text="Create New Module"
          onClick={() => navigate("/admin/module-create")}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden mt-20">
        <ModuleListTable
          modules={data?.data}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default ModuleList;
