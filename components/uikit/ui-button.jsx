import clsx from "clsx";

/**
 * @param {{
 * children: ReactNode,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */

export const UIButton = ({ children, className, size, variant }) => {
  const buttonClasses = clsx(
    "transition-colors  leading-tight",
    className,
    {
      md: "rounded px-6 py-2 text-sm",
      lg: "rounded-lg text-2xl px-6 py-2",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline:
        "border border-teal-600 text-teal-600 hover:text-teal-500 bg-transparent",
    }[variant]
  );

  return <button className={buttonClasses}>{children}</button>;
};
