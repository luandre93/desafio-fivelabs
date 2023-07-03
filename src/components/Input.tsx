import { ErrorMessage, Field } from "formik";
import React from "react";

interface Props {
    name: string;
    type: string;
    label: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string;

}


const Input: React.FC<Props> = ({ name, label, type, value, required, disabled, defaultValue, ...props }) => {
    return (
        <>
            <div className="relative flex flex-wrap items-stretch mx-2 mt-2">
                <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                    <a className="text-white">{label}</a>
                    {required && <a className="text-red-700">*</a>}
                </span>
                <Field
                    className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary 
                   focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                    type={type}
                    disabled={disabled}
                    {...props}
                />

            </div>
            <div className="text-red-700 text-sm ml-3" > <ErrorMessage name={name} /></div>
        </>
    )
}

export default Input;

