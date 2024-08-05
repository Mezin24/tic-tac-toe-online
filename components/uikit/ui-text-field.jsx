import clsx from "clsx";

/**
 * @param {{
 * label?: string;
 * className?: string;
 * required?: boolean,
 * helperText?: string;
 * errorText?: string;
 * } & import('react').HtmlHTMLAttributes<HTMLInputElement>} props
 */

export const UITextField = ({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor="example2"
          className={clsx(
            required && "after:text-red-500 after:content-['*']",
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5"
          )}
        >
          {label}
        </label>
      )}
      <input
        type="email"
        id="example2"
        required={required}
        className={clsx(
          `
            py-2 px-2 text-sm leading-tight
            block w-full rounded-md  shadow-sm 
             disabled:cursor-not-allowed 
            disabled:bg-gray-50 disabled:text-gray-500 
            outline-none
          `,
          errorText
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20  border-orange-600"
            : "focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 border-slate-200"
        )}
        {...inputProps}
      />
      {(helperText || errorText) && (
        <p
          className={clsx(
            "mt-1 text-sm",
            errorText ? "text-orange-600" : "text-slate-400"
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
};
