import React from "react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import ModuleListTable from "../../../components/Admin/module/ModuleListTable";

const ModuleList = () => {
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    "/module/all-modules"
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
        Module List
      </h1>
      <ModuleListTable
        courses={data?.data}
        onDelete={onDelete}
        onView={onView}
        onEdit={onEdit}
        isLoading={isLoading}
        createLink="/admin/module-create"
      />
    </div>
  );
};

export default ModuleList;
