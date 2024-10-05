import React from "react";
import { Input } from "./ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Control, FieldPath } from "react-hook-form";
import { Inter } from "next/font/google";
import { authFormSchema } from "@/lib/utils";
import { z } from "zod";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  rightIcon?: React.ReactNode;
  type?: string;
}

const CustomInput = ({ control, type, name, label, placeholder, rightIcon }: CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className="flex flex-col gap-1.5">
        <FormLabel className="text-14 w-full max-w-[280px] font-medium text-gray-700">
          {label}
        </FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
            <Input 
              placeholder={placeholder}
              className="text-16 placeholder:text-16 h-12 rounded-lg border border-bankGradient text-gray-900 placeholder:text-gray-500"
              type={type}
              {...field}
              rightIcon={rightIcon}
            />
          </FormControl>
          <FormMessage className="text-12 text-red-500 mt-2" />
        </div>
      </div>
    )}
  />
  );
};

export default CustomInput;
