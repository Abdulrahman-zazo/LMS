// src/components/CourseInfo.tsx
interface IDescription {
  description: string;
}
export const CourseInfo = ({ description }: IDescription) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">وصف الكورس</h2>
      <p className="text-paragraph text-xs sm:text-md md:text-md leading-relaxed mb-4">
        {description}
      </p>
    </div>
  );
};
