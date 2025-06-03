import React, { Suspense } from "react";
import { Loaders } from "../../components/Loader";

const FormComplaints = React.lazy(
  () => import("../../components/FormComplaints")
);

const ComplaintsPage = () => {
  return (
    <div className="bg-bg-purple  sm:p-8 md:p-12   ">
      <Suspense fallback={<Loaders />}>
        <div className=" w-full sm:max-w-[90%] sm:mx-auto mt-18 ">
          <FormComplaints />
        </div>
      </Suspense>
    </div>
  );
};

export default ComplaintsPage;
