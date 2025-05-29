// src/components/Reviews.tsx

import { useState } from "react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  comment_text: string;
}

const comments: Comment[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder avatar
    timeAgo: "2 days ago",
    comment_text:
      "لقد فاقت هذه الدورة توقعاتي! أسلوب التدريس للمدرس شيق، والمحتوى منظم بشكل جيد. استمتعتُ بشكل خاص بالتمارين العملية.",
  },
  {
    id: 3,
    author: "Emily White",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg", // Placeholder avatar
    timeAgo: "3 days ago",
    comment_text: "والمحتوى منظم بشكل جيد. استمتعت بشكل خاص بالتمارين العملية.",
  },
  {
    id: 4,
    author: "David Lee", // صاحب التعليق
    avatar: "https://randomuser.me/api/portraits/men/4.jpg", //صورتو
    timeAgo: "4 days ago",
    comment_text:
      " أسلوب التدريس للمدرس شيق، والمحتوى منظم بشكل جيد. استمتعتُ بشكل خاص بالتمارين العملية.",
  },
];

export const Reviews = () => {
  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments ? comments : comments.slice(0, 1);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowAllComments(!showAllComments)}
          className="text-primary hover:text-primary/50 font-medium text-xs sm:text-sm"
        >
          {showAllComments ? "عرض أقل" : "عرض المزيد"}
        </button>
      </div>

      <div className="space-y-6">
        {displayedComments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <img
              className="h-10 w-10 rounded-full"
              src={comment.avatar}
              alt={`${comment.author}'s avatar`}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <p className="font-medium text-gray-900">{comment.author}</p>
                <p className="text-[8px] sm:text-xs text-gray-500">
                  {comment.timeAgo}
                </p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {comment.comment_text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xs font-semibold text-gray-900 mb-4">
          إضافة تعليق
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
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary/50 resize-y placeholder:text-xs placeholder:font-light placeholder:text-neutral-400"
              rows={2}
              placeholder="اترك تعليقاً لمساعدة الآخرين في معرفة رأيك..."
            ></textarea>
            <button className="mt-3 float-right bg-primary w-full text-white text-sm py-2 px-6 rounded-md hover:bg-primary/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50">
              أرسل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
