// src/components/CoursePage.tsx

import React, { useState } from "react";
import { CourseInfo } from "./CourseInfo"; // Assuming you'll create this component
import { Reviews } from "./Reviews"; // Assuming you'll create this component

const CoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"info" | "reviews">("info");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        {/* Main content area */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full lg:flex">
          {/* Left Section (Image and Course Description) */}
          <div className="lg:w-2/3 p-6">
            <img
              src="/image_48cf53.png" // Replace with your actual image path
              alt="Boy learning web development"
              className="w-full h-auto object-cover rounded-md mb-6"
            />

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("info")}
                  className={`${
                    activeTab === "info"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Course Info
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`${
                    activeTab === "reviews"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "info" ? <CourseInfo /> : <Reviews />}
            </div>
          </div>

          {/* Right Section (What You'll Learn, Material Includes, Requirements) */}
          <div className="lg:w-1/3 bg-gray-50 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What You'll Learn
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Master the fundamentals of web design and development.</li>
              <li>Build visually stunning and interactive websites.</li>
              <li>Explore advanced web technologies and frameworks.</li>
              <li>Develop a deep understanding of web principles.</li>
              <li>Stay ahead with cutting-edge trends.</li>
              <li>Gain skills equivalent to 3x a traditional curriculum.</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Material Includes
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>40 Hours</li>
              <li>Files, and Links</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Requirements
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>The student must be older than 9 years old</li>
            </ul>

            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Contact with Teacher
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
