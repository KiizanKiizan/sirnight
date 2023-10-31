import Link from "next/link";
import React from "react";

type TProps = {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "text";
  className?: string;
  border?: boolean;
  disabled?: boolean;
};

export const LinkButton = ({
  href,
  children,
  onClick,
  variant,
  className,
  border,
  disabled,
}: TProps) => {
  const classes: string[] = [
    "inline-block",
    "py-3",
    "mx-3",
    "text-center",
    "w-[calc(100%_-_24px)]",
    "font-medium",
    "text-base",
    "relative",
    "rounded-full",
  ];

  classes.push(
    (() => {
      switch (variant) {
        case "text":
          return "bg-clay text-themeGray border border-[#D8D8D2]";
        case "primary":
        default:
          return "bg-themeGray text-slate-200";
      }
    })(),
  );

  if (border) classes.push("border-2 border-solid border-white");

  if (disabled)
    return <span className={`${className ?? ""} ${classes.join(" ")}`}>{children}</span>;

  return (
    <Link
      href={href}
      passHref
      onClick={onClick}
      className={`${className ?? ""} ${classes.join(" ")}`}
    >
      {children}
    </Link>
  );
};
