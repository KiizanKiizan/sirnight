import React from "react";

type TProps = {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly className?: string;
};
export const Layout = ({ children, title, className }: TProps) => {
  return (
    <div className={`px-12 pb-32 ${className ?? ""}`}>
      <h1 className="py-12 text-center text-3xl font-bold">{title}</h1>
      <div className="newsContent">{children}</div>
    </div>
  );
};
