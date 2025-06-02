// message.ts
import { toast } from "react-hot-toast";

export const showMessage = ({
  type,
  content,
  duration = 2000,
}: {
  type: "loading" | "success" | "error";
  content: string;
  duration?: number;
}) => {
  toast[type](content, { duration });
};
