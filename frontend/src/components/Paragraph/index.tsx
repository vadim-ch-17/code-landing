import React from "react";
import classNames from "classnames";
interface ParagraphProps {
  children: React.ReactNode | string;
  classes?: string;
  type?: "xs" | "sm" | "md";
}

const Paragraph = ({ children, classes, type }: ParagraphProps) => {
  const size = {
    xs: "text-body-12-16",
    sm: "text-body-14-20",
    md: "text-body-16-24",
  }[type || "md"];

  return (
    <p className={classNames(" mb-8 text-lightPrimary", size, classes)}>
      {children}
    </p>
  );
};

export default Paragraph;
