import React from "react";

type Props = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "2xl" | "xl" | "sm" | "xs" | "base";
  color?: "primary" | "secondary" | "strong-gray";
  weight?: "normal" | "medium" | "medium" | "bold";
  component?: "span";
};

export const Typography = ({ id, className, children, size, color, weight, component }: Props) => {
  const classes: string[] = [];

  classes.push(
    (() => {
      switch (size) {
        case "2xl":
          return "text-2xl";
        case "xl":
          return "text-xl";
        case "sm":
          return "text-sm";
        case "xs":
          return "text-xs";
        case "base":
        default:
          return "text-base";
      }
    })(),
  );

  classes.push(
    (() => {
      switch (color) {
        case "primary":
          return "text-themeGray";
        case "secondary":
          return "text-slate-200";
        case "strong-gray":
          return "text-neutral-800";
        default:
          return "text-current";
      }
    })(),
  );

  classes.push(
    (() => {
      switch (weight) {
        case "normal":
          return "font-normal";
        case "medium":
          return "font-medium";
        case "bold":
          return "font-bold";
        case "medium":
        default:
          return "font-medium";
      }
    })(),
  );

  classes.push();

  switch (component) {
    case "span":
      return (
        <span id={id ?? ""} className={`${className ?? ""} ${classes.join(" ")}`}>
          {children}
        </span>
      );
  }

  return (
    <p id={id ?? ""} className={`${className ?? ""} ${classes.join(" ")}`}>
      {children}
    </p>
  );
};
