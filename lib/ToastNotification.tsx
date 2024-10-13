import React from "react";
import { toast } from "sonner";
interface ToastNotificationProps {
  title: string;
  description: string;
  type?: "success" | "error" | "info" |"warning" | "loading"; 
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  title,
  description,
  type = "success",
}) => {
  const toastType = type === "success" ? toast.success : toast.error;

 
  toastType(title,{
      description: <span className="text-xs font-light">{description}</span>,
      action: {
        label: "X", 
        onClick: () => {
          
        },
      },
      duration: 5000,
    }
  );

  return null; 
};

export default ToastNotification;
