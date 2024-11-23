import { twMerge } from "tailwind-merge";

export default function RadioIinput({
  labelClasses,
  inputClasses,
  wrapperClasses,
  name,
  label,
  checked,
  type,
  id,
  onChange,
  value,
}) {
  return (
    <>
      <div
        className={twMerge(
          `flex items-center gap-4 rounded-md border-2 pl-4 hover:cursor-pointer hover:border-accentColor md:col-start-2`,
          wrapperClasses,
        )}
      >
        <input
          name={name}
          defaultChecked={checked}
          id={`radio-${id}`}
          type={type}
          value={value}
          className={twMerge(
            `placeholder:fontPreset7 min-h-[50px] rounded-md border-2 pl-2 accent-accentColor hover:cursor-pointer`,
            inputClasses,
          )}
          onChange={onChange}
        />
        <label
          htmlFor={`radio-${id}`}
          className={twMerge(
            `w-full py-3 after:content-none hover:cursor-pointer`,
            labelClasses,
          )}
        >
          {label}
        </label>
      </div>
    </>
  );
}
