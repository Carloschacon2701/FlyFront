"use client";

import { useField } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props) => {
  const [field, meta] = useField(props?.name as string);

  return (
    <div className="flex flex-col ">
      <label htmlFor={props?.name as string}>{props.name}</label>
      <input
        {...field}
        {...props}
        className="rounded-lg p-2 text-typo bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};
