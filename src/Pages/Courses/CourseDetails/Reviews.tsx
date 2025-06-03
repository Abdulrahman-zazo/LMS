// src/components/Reviews.tsx
// import { formatDistanceToNow } from "date-fns";
// import { ar } from "date-fns/locale";
import { useState } from "react";
import type { IComments } from "../../../types";
import { useTranslation } from "react-i18next";
import { useGetuserInformationQuery } from "../../../app/features/User/userApi";
import { cookieService } from "../../../Cookies/CookiesServices";
import toast, { Toaster } from "react-hot-toast";
import {
  useAddCommentsMutation,
  useDeleteCommentsMutation,
} from "../../../app/features/Comments/CommentsApi";

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
  const token = cookieService.get("auth_token");
  const [comment, setComment] = useState("");

  const [showAllComments, setShowAllComments] = useState(false);
  const { data: user, isLoading } = useGetuserInformationQuery(token as string);
  // const [] = useAddCommentsMutation();
  // useDeleteCommentsMutation()
  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(comment);
    // onSubmit(comment);
    setComment("");
    toast.success("تم إرسال التعليق");
  };
  return (
    <div>
      <Toaster position="top-left" />
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
              className="h-10 w-10  object-cover rounded-full"
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
            className="h-10 w-10 object-cover rounded-full"
            src={user?.data.image} // Placeholder for current user's avatar
            alt="Your avatar"
          />
          <form onSubmit={handleSubmit} className="flex-1">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary/50 resize-y placeholder:text-[10px] placeholder:sm:text-xs placeholder:font-light placeholder:text-neutral-400"
              rows={3}
              placeholder={t("Courses_card.comments_placeholder")}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={200} // مثلاً كل سطر 100 حرف → سطرين = 200 حرف
              style={{ resize: "none" }} // يمنع المستخدم من التوسعة
            />

            <button
              disabled={!comment.trim()}
              type="submit"
              className={`mt-3 float-right  w-full text-white text-sm py-2 px-6 rounded-md hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 ${
                !comment.trim()
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary cursor-pointer "
              }`}
            >
              {t("Courses_card.send")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
