"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import ToastNotification from '@/lib/ToastNotification';



const ToastDemo = () => {
  

    return (
        <Button
            onClick={() => {
                // toast.success("Event has been created.")
                // toast.success("Success", {
                //     description: (
                //         <span className="text-xs font-light">
                //           Sunday, December 03, 2023 at 9:00 AM
                //         </span>
                //       ),
                //     action: {
                //         label: "X",
                //         onClick: () => {
                           
                //           },
                //       },
                //   })
                ToastNotification({
                    title: "Success",  // Your custom title
                    description: "Sunday, December 03, 2023 at 9:00 AM",  // Your custom description
                    type: 'success',  // Type can be 'success' or 'error'
                  });
            }}
        >
            Show Toast
        </Button>
    );
};

export default ToastDemo;
