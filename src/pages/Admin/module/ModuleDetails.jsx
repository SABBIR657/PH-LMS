import React from "react";
import { useParams } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";
import ModuleDetailsCard from "../../../components/Admin/module/ModuleDetailsCard";

const ModuleDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetchQuery(
    `/module/${id}`
  );

  console.log(data);
  return (
    <div className="bg-[#45496D]">
      <ModuleDetailsCard moduleDetails={data?.data} isLoading={isLoading} />
    </div>
  );
};

export default ModuleDetails;
