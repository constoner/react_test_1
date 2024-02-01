import React from "react";

import Loading from "../../shared/ui/loading";
import DataWrapper from "./dataWrapper";

import { useGetPostsQuery } from "../../shared/api";

const LoadList = () => {
  const { data, isLoading } = useGetPostsQuery(0);

  return (
    <div className="position-relative h-100">
      {isLoading ? <Loading /> : <DataWrapper data={data} />}
    </div>
  );
};
export default LoadList;
