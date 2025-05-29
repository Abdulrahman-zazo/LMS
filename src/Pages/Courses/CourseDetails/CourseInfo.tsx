// src/components/CourseInfo.tsx
interface IDescription {
  description: string;
}
export const CourseInfo = ({ description }: IDescription) => {
  return (
    <div>
      <h2 className=" text-md sm:text-xl font-medium text-text mb-4">
        وصف الكورس
      </h2>
      <p className="text-paragraph text-xs sm:text-md md:text-md leading-relaxed sm:mb-4">
        {description}
      </p>
    </div>
  );
};
