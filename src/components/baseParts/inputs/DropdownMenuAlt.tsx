type TProps = {
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
};
export const DropdownMenuAlt = ({
  id,
  value,
  onChange,
  placeholder,
  children,
  className,
}: TProps) => {
  return (
    <div
      className={`relative after:absolute after:right-[10px] after:top-[23px] after:border-x-[5px] after:border-t-[5px] after:border-themeGray after:border-x-transparent ${
        className ?? ""
      }`}
    >
      <select
        id={id ?? ""}
        className={`w-full appearance-none rounded border-[1px] border-solid border-themeGray bg-clay p-3 `}
        value={value}
        onChange={onChange}
      >
        {placeholder && (
          <option value="" disabled style={{ display: "none" }}>
            {placeholder}
          </option>
        )}
        {children}
      </select>
    </div>
  );
};
