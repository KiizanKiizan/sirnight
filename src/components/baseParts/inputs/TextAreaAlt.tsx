import { ChangeEventHandler } from "react";

type TProps = {
  id?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  autoComplete?: string;
  className?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
};
export const TextAreaAlt = ({
  id,
  className,
  value,
  onChange,
  placeholder,
  autoComplete,
  rows = 1,
  disabled = false,
}: TProps) => {
  return (
    <textarea
      id={id ?? ""}
      className={`w-full resize-none rounded-md border border-themeGray bg-clay p-3 ${
        className ?? ""
      }`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      autoComplete={autoComplete ?? ""}
    ></textarea>
  );
};
