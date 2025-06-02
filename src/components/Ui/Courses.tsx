import CourseCard from "./courseCard";
import { useTranslation } from "react-i18next";
import { useGetAllCoursesQuery } from "../../app/features/Courses/CoursesApi";
import HandelError from "../HandelError";
import SkeletonCustom from "../Skeleton";

interface IcourseMax {
  max?: number;
}
interface IcourseCard {
  id: number;
  name: string;
  description: string;
  image: string;
}

const CoursesComponent = ({ max }: IcourseMax) => {
  const { t } = useTranslation("translation");

  const { data, isLoading, isError } = useGetAllCoursesQuery({});

  if (isLoading) {
    return <SkeletonCustom type="card" />;
  }
  if (isError) {
    return <HandelError />;
  }

  return (
    <section className="bg-bg-purple  px-4 sm:px-8 py-8 sm:py-16 " dir="rtl">
      <div className=" mx-auto w-[90%] max-w-[1440px] ">
        {/* Header */}
        <div className="text-right mb-10">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-14">
            {t("Courses.title")}
            <br />
            <span className="text-primary ">{t("Courses.slogan")} </span>
          </h2>
          <p className="text-sm sm:text-md text-paragraph max-w-2xl ">
            {t("Courses.description")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3  mb-10">
          <button
            title="All courses"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:bg-primary-dark"
          >
            {t("Courses.button1")}
          </button>
          <button
            title="Recorded courses"
            className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200"
          >
            {t("Courses.button2")}
          </button>
          <button
            title="Online courses"
            className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200"
          >
            {t("Courses.button3")}
          </button>
        </div>

        {/* Course Cards */}

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {data?.data.slice(0, max).map((course: IcourseCard) => {
            const { description, id, name, image } = course;
            return (
              <CourseCard
                description={description}
                id={id}
                title={name}
                image={image}
                key={id}
                link="/protected/courses"
              />
            );
          })}
        </div>

        {data?.length === 0 && (
          <div className="flex justify-center py-12">
            <p className="text-xs sm:text-sm text-neutral-500">
              {t("Courses.Nocourse")}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesComponent;
