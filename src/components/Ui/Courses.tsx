import Image1 from "../../assets/3663630_684c_4.png";
import Image2 from "../../assets/4039100_2cfe_3.png";
import Image3 from "../../assets/4256760_59bd_3.png";
import Image4 from "../../assets/4276090_9133.png";
import { Button } from "antd";
import CourseCard from "./courseCard";
import { useTranslation } from "react-i18next";
import { useGetAllCoursesQuery } from "../../app/features/Courses/CoursesApi";
import HandelError from "../HandelError";
import SkeletonCustom from "../Skeleton";

interface Icourse {
  max?: number;
}
const courses = [
  {
    id: 1,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image1,
    teacher: "Wasem Saleh",
  },
  {
    id: 2,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image2,
    teacher: "Wasem Saleh",
  },
  {
    id: 3,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image3,
    teacher: "Wasem Saleh",
  },
  {
    id: 4,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image4,
    teacher: "Wasem Saleh",
  },
  {
    id: 5,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image4,
    teacher: "Wasem Saleh",
  },
  {
    id: 6,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image4,
    teacher: "Wasem Saleh",
  },
  {
    id: 7,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image3,
    teacher: "Wasem Saleh",
  },
  {
    id: 8,
    title: "Teach HTML and CSS to Kids",
    description:
      "Build visually engaging websites with a curriculum that is 70% more content than traditional curriculums.",
    image: Image1,
    teacher: "Wasem Saleh",
  },
];

const CoursesComponent = ({ max }: Icourse) => {
  const { t } = useTranslation("translation");

  const { data, isLoading, isError, error } = useGetAllCoursesQuery({});
  console.log(data, isLoading, isError, error);
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
          <Button className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:bg-primary-dark">
            {t("Courses.button1")}
          </Button>
          <Button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200">
            {t("Courses.button2")}
          </Button>
          <Button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200">
            {t("Courses.button3")}
          </Button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {courses?.slice(0, max).map((course) => (
            <CourseCard
              description={course.description}
              id={course.id}
              title={course.title}
              image={course.image}
              key={course.id}
              link="/protected/courses"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;
