import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Icourse {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}
const CourseCard = (course: Icourse) => {
  const Navigate = useNavigate();
  const { t } = useTranslation("translation");

  return (
    <div
      key={course.id}
      className="bg-white rounded-xl overflow-hidden flex flex-col "
    >
      <img
        src={course.image}
        alt={course.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-2">{course.title}</h3>
        <p className="text-sm text-gray-500 flex-1">{course.description}</p>
        <Button
          type="primary"
          onClick={() => Navigate(`${course.link}/${course.id}`)}
          className="mt-4 w-full self-start text-sm text-primary border border-primary px-4 py-1 rounded hover:bg-primary hover:text-white transition"
        >
          {t("buttons.btn-details")}
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
