// src/components/Reviews.tsx

import React, { useState } from "react";

interface Comment {
  id: number;
  author: string;
  avatar: string;
  timeAgo: string;
  text: string;
}

const comments: Comment[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder avatar
    timeAgo: "2 days ago",
    text: "This course exceeded my expectations! The instructor's teaching style is engaging and the content is well-structured. I particularly enjoyed the practical exercises.",
  },
  {
    id: 2,
    author: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg", // Placeholder avatar
    timeAgo: "2 days ago",
    text: "Great course content! However, I think some advanced topics could be covered in more detail. Overall, it's still a valuable resource for beginners.",
  },
  {
    id: 3,
    author: "Emily White",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg", // Placeholder avatar
    timeAgo: "3 days ago",
    text: "Really enjoyed this course. Very clear explanations and practical examples. Highly recommend for anyone starting with web development.",
  },
  {
    id: 4,
    author: "David Lee",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg", // Placeholder avatar
    timeAgo: "4 days ago",
    text: "The course material is solid, but I wished there were more exercises to practice the concepts. Still, a good foundation.",
  },
];

export const Reviews: React.FC = () => {
  const [showAllComments, setShowAllComments] = useState(false);

  const displayedComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowAllComments(!showAllComments)}
          className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
        >
          {showAllComments ? "Show Less Comments" : "Load All Comments"}
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
                <p className="text-sm text-gray-500">{comment.timeAgo}</p>
              </div>
              <p className="text-gray-700 leading-relaxed">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Add a Comment
        </h3>
        <div className="flex space-x-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/5.jpg" // Placeholder for current user's avatar
            alt="Your avatar"
          />
          <div className="flex-1">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 resize-y"
              rows={3}
              placeholder="Share your thoughts..."
            ></textarea>
            <button className="mt-3 float-right bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
