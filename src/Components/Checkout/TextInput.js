import { twMerge } from "tailwind-merge";

export default function TextInput({
  labelClasses,
  inputClasses,
  wrapperClasses,
  name,
  label,
  required,
  placeholder,
  type,
}) {
  return (
    <>
      <div className={twMerge(`flex flex-col`, wrapperClasses)}>
        <label
          htmlFor={name}
          className={twMerge(
            `fontPreset7 relative font-semibold text-primaryColor ${required ? `after:absolute after:text-red-600 after:content-["*"]` : `after:content-none`} `,
            labelClasses,
          )}
        >
          {label}
        </label>
        <input
          required={required}
          name={name}
          placeholder={placeholder}
          className={twMerge(
            `placeholder:fontPreset7 min-h-[50px] rounded-md border-2 pl-2`,
            inputClasses,
          )}
          type={type}
        />
      </div>
    </>
  );
}
