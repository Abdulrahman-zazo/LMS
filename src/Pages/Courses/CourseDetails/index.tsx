// src/components/CoursePage.tsx

import { useState } from "react";
import { Reviews } from "./Reviews"; // Assuming you'll create this component
import type { ICourse } from "../../../types";
import { useLocation } from "react-router-dom";
import { HeaderCourse } from "../../../components/HederCourse";
import ImageCourse from "../../../assets/4039100_2cfe_3.png";
import { CourseInfo } from "./CourseInfo";

const CoursePage = () => {
  const Location = useLocation();
  console.log(Location);
  const coursess: ICourse = {
    id: 3,
    name: "HTML, CSS للأطفال !",
    description:
      "تخيل إنشاء مواقع ويب مذهلة بسهولة تامة مع إتقان منهج دراسي غني بمعرفة تفوق بثلاثة أضعاف ما توفره المدارس التقليدية! منصتنا تُمكّنك من بناء مواقع ويب جذابة بصريًا باستخدام أدوات سهلة الاستخدام وموارد ثرية. هذا يعني أنك ستكتسب فهمًا عميقًا للمبادئ الأساسية والتقنيات المتقدمة والاتجاهات الرائدة التي تُشكل العالم الرقمي.",
    image: ImageCourse,
    profilevideo: null,
    contents: "+96358263253",
    hours: "24",
    cost: null,
    type: "online",
    material: "اختبارات، فيديوهات تعريفية",
    requirements: "عمر الطالب يجب ان يكون اكبر من 9 سنوات .",
    is_active: 1,
    comments: [
      {
        id: 1,
        author: "https://randomuser.me/api/portraits/men/4.jpg",
        comment_text: "4",
        avatar: "David Lee",
        is_visible: 1,
      },
    ],
  };
  const [activeTab, setActiveTab] = useState<"info" | "reviews">("info");

  return (
    <div className="container mx-auto p-4">
      <HeaderCourse
        material={coursess.material}
        title={coursess.name}
        description={coursess.description}
        type={coursess.type}
        hours={coursess.hours}
      />
      <div className="flex justify-center my-8" dir="rtl">
        {/* Main content area */}
        <div className="bg-white rounded-lg overflow-hidden w-[90%] lg:flex">
          {/* Left Section (Image and Course Description) */}
          <div className="lg:w-1/2 p-6">
            <img
              src={ImageCourse} // Replace with your actual image path
              alt="Boy learning web development"
              className="w-full h-auto object-cover rounded-md mb-2"
            />

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`${
                    activeTab === "info"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  معلومات الكورس
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`${
                    activeTab === "reviews"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  التعليقات والأراء ({coursess.comments.length})
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "info" ? (
                <CourseInfo description={coursess.description} />
              ) : (
                <Reviews />
              )}
            </div>
          </div>

          {/* Right Section (What You'll Learn, Material Includes, Requirements) */}
          <div className="lg:w-1/2 border border-gray-200 p-8 m-6 rounded-2xl">
            <h3 className="text-sm md:text-md  font-semibold text-text mb-4">
              المعلومات التي سنتعرف عليها
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-md space-y-2 mb-6">
              <li>أتقن أساسيات تصميم وتطوير الويب.</li>
              <li>أنشئ مواقع ويب تفاعلية ومذهلة بصريًا.</li>
              <li>استكشف تقنيات وأطر عمل الويب المتقدمة.</li>
              <li>طوّر فهمًا عميقًا لمبادئ الويب.</li>
              <li>واكب أحدث الاتجاهات.</li>
              <li>اكتسب مهارات تعادل ثلاثة أضعاف المنهج الدراسي التقليدي.</li>
            </ul>

            <h3 className="text-sm md:text-md  font-semibold text-text mb-4">
              محتوى الدورة
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-md space-y-2 mb-6">
              <li>{coursess.hours} ساعة.</li>
              {coursess.material && <li>{coursess.material}</li>}
            </ul>

            <h3 className="text-sm md:text-md  font-semibold text-text mb-4">
              متطلبات الدورة
            </h3>
            <ul className="list-disc list-inside text-paragraph text-sm md:text-md space-y-2 mb-6">
              <li>{coursess.requirements}</li>
            </ul>

            <button className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50">
              احجز جلسة مجانية الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
