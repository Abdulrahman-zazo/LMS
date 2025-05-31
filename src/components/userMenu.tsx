// components/UserMenu.tsx
import { LucideLogOut } from "lucide-react";
import { useState } from "react";

interface User {
  name: string;
  avatar: string;
  email: string;
}

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  const user: User = {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/200",
    email: "zazoabdalrahman@gmail.co",
  };

  return (
    <div
      className="relative inline-block text-left "
      tabIndex={0} // يجعل العنصر قابلًا للتركيز
      onBlur={() => setOpen(false)}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 focus:outline-none cursor-pointer hover:opacity-80"
      >
        <div className="sm:flex flex-col items-end hidden ">
          <p className="text-sm font-medium text-paragraph">{user.name}</p>
          <p className="text-xs font-medium text-neutral-500">{user.email}</p>
        </div>
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-8 h-8 rounded-full border cursor-pointer"
        />
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 ">
          <ul className="py-1 text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer  text-xs">
              انضم إلينا
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
              الشكاوي والمقترحات
            </li>

            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs">
              الإعدادات
            </li>
            <li className="border-t my-1" />
            <li className="px-4 py-2 flex items-center justify-between text-xs hover:bg-gray-100 cursor-pointer text-red-600">
              <span>
                <LucideLogOut size={16} />
              </span>
              <span>تسجيل الخروج</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
