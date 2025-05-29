import { FaChalkboardTeacher } from "react-icons/fa";
import Image1 from "../../assets/3663630_684c_4.png";
import Image2 from "../../assets/4039100_2cfe_3.png";
import Image3 from "../../assets/4256760_59bd_3.png";
import Image4 from "../../assets/4276090_9133.png";
import { Button } from "antd";
import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
];

const CoursesComponent = () => {
  const Navigate = useNavigate();
  return (
    <section className="bg-bg-purple  px-4 sm:px-8 py-16 " dir="rtl">
      <div className=" mx-auto w-[90%] max-w-[1440px] ">
        {/* Header */}
        <div className="text-right mb-10">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-14">
            طالب، محترف، أم معلّم؟ <br />
            <span className="text-primary ">نحن معك دائماً 💡!</span>
          </h2>
          <p className="text-paragraph max-w-2xl ">
            مهما كان دورك أو هدفك، صممت منصة H-Platform خصيصًا لتناسبك وتدعم
            مسيرتك.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3  mb-10">
          <Button className="bg-primary text-white px-5 py-2 rounded-full text-sm hover:bg-primary-dark">
            كل الدورات
          </Button>
          <Button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200">
            مسجلة
          </Button>
          <Button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200">
            اون لاين
          </Button>
          <Button className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm hover:bg-gray-200">
            العروض
          </Button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course) => (
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
                <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                  <FaChalkboardTeacher />
                  <span>{course.teacher}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 flex-1">
                  {course.description}
                </p>
                <Button
                  type="primary"
                  onClick={() => Navigate(`/protected/courses/${course.id}`)}
                  className="mt-4 w-full self-start text-sm text-primary border border-primary px-4 py-1 rounded hover:bg-primary hover:text-white transition"
                >
                  التفاصيل
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button type="default" className="text-primary text-sm " size="large">
            <ArrowRightCircle />
            عرض كل الدورات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;
