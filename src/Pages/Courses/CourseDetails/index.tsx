// src/components/CoursePage.tsx

import { useState } from "react";
import { Reviews } from "./Reviews"; // Assuming you'll create this component
import { useParams } from "react-router-dom";
import { HeaderCourse } from "../../../components/HederCourse";
import ImageCourse from "../../../assets/4039100_2cfe_3.png";
import { CourseInfo } from "./CourseInfo";
import ComplaintsSections from "../../../components/Ui/Complaints";
import { useGetCourseByIdQuery } from "../../../app/features/Courses/CoursesApi";
import HandelError from "../../../components/HandelError";
import SkeletonCustom from "../../../components/Skeleton";
import { useTranslation } from "react-i18next";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState<"info" | "reviews">("info");
  const path = useParams();
  const { id } = path;
  const { data, isLoading, isError } = useGetCourseByIdQuery(Number(id));
  const { t } = useTranslation("translation");
  if (isLoading) {
    return <SkeletonCustom type="list" />;
  }
  if (isError) {
    return <HandelError />;
  }

  return (
    <div className="container mx-auto p-4">
      <HeaderCourse
        material={data?.course.material}
        title={data?.course.name}
        description={data?.course.summary}
        type={data?.course.type}
        hours={data?.course.hours}
      />
      <div className="flex justify-center my-8">
        {/* Main content area */}
        <div className="bg-white rounded-lg overflow-hidden  sm:w-[90%] lg:flex">
          {/* Left Section (Image and Course Description) */}
          <div className="lg:w-1/2 p-6">
            <img
              loading="lazy"
              src={ImageCourse} // Replace with your actual image path
              alt="Boy learning web development"
              className="w-full h-auto object-cover rounded-md mb-2"
            />

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  title="معلومات الكورس"
                  onClick={() => setActiveTab("info")}
                  className={`${
                    activeTab === "info"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  {t("Courses.Course_info")}
                </button>
                <button
                  title="التعليقات والأراء"
                  onClick={() => setActiveTab("reviews")}
                  className={`${
                    activeTab === "reviews"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm`}
                >
                  {t("Courses.comments")}({data?.course.comments.length})
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "info" ? (
                <CourseInfo description={data?.course.description} />
              ) : (
                <Reviews
                  comments={data?.course.comments}
                  course_id={data?.course.id}
                />
              )}
            </div>
          </div>

          {/* Right Section (What You'll Learn, Material Includes, Requirements) */}
          <div className="lg:w-1/2 sm:border border-gray-200 p-0 sm:p-8 m-6 rounded-2xl">
            <h3 className="text-sm md:text-base  font-semibold text-text mb-4">
              {t("Courses.what_we_learn")}
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-base space-y-2 mb-6">
              <li>{data?.course.contents}</li>
            </ul>

            <h3 className="text-sm md:text-base  font-semibold text-text mb-4">
              {t("Courses.content_course")}
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-base space-y-2 mb-6">
              <li>{data?.course.hours} ساعة.</li>
              {data?.course.material && <li>{data?.course.material}</li>}
            </ul>

            <h3 className="text-sm md:text-base  font-semibold text-text mb-4">
              {t("Courses.requairment")}
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-base space-y-2 mb-6">
              <li>{data?.course.requirements}</li>
            </ul>

            <button
              title="احجز جلسة"
              className="w-full bg-primary text-sm md:text-base text-white py-3 px-4 rounded-md hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            >
              {t("Courses.button_free")}
            </button>
          </div>
        </div>
      </div>
      <ComplaintsSections />
    </div>
  );
};

export default CoursePage;
