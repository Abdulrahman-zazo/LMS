// src/components/Reviews.tsx
// import { formatDistanceToNow } from "date-fns";
// import { ar } from "date-fns/locale";
import { useState } from "react";
import type { IComments } from "../../../types";
import { useTranslation } from "react-i18next";

// const getTimeAgo = (dateString: string) => {
//   return formatDistanceToNow(new Date(dateString), {
//     addSuffix: true,
//     locale: ar,
//   });
// };
interface ReviewsProps {
  comments: IComments[];
}

export const Reviews = ({ comments }: ReviewsProps) => {
  const { t } = useTranslation("translation");

  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  return (
    <div>
      {displayedComments.length > 1 && (
        <div className="flex justify-center mb-4">
          <button
            title="Courses_card.showAll"
            onClick={() => setShowAllComments(!showAllComments)}
            className="text-primary hover:text-primary/50 font-medium text-xs sm:text-sm"
          >
            {showAllComments
              ? t("Courses_card.showless")
              : t("Courses_card.showAll")}
          </button>
        </div>
      )}
      <div className="space-y-6">
        {displayedComments.map((comment: IComments) => (
          <div key={comment.id} className="flex space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={comment.avatar}
              alt={`${comment.author}'s avatar`}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <p className=" text-md sm:text-lg font-medium text-gray-900">
                  {comment.author}
                </p>
                <p className="text-[10px] sm:text-sm text-gray-500">
                  {/* {getTimeAgo(comment.time)} */}
                </p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                {comment.comment_text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-900 mb-4">
          {t("Courses_card.add_comments")}
        </h3>
        <div className="flex space-x-4">
          {/* من معلومات اليوزر  */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/5.jpg" // Placeholder for current user's avatar
            alt="Your avatar"
          />
          <div className="flex-1">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary/50 resize-y placeholder:text-[10px] placeholder:sm:text-xs placeholder:font-light placeholder:text-neutral-400"
              rows={2}
              placeholder={t("Courses_card.comments_placeholder")}
            ></textarea>
            <button className="mt-3 float-right bg-primary w-full text-white text-sm py-2 px-6 rounded-md hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50">
              {t("Courses_card.send")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
