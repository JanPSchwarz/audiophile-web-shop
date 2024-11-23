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
  pattern,
  invalidText,
  hide,
}) {
  return (
    <>
      <div
        className={twMerge(
          `relative ${hide ? `hidden` : `flex`} flex-col`,
          wrapperClasses,
        )}
      >
        <label
          htmlFor={name}
          className={twMerge(
            `fontPreset7 font-semibold text-primaryColor ${required ? `after:absolute after:text-red-600 after:content-["*"]` : `after:content-none`} `,
            labelClasses,
          )}
        >
          {label}
        </label>
        <input
          required={required}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          className={twMerge(
            `placeholder:fontPreset7 peer min-h-[50px] rounded-md border-2 pl-2 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500`,
            inputClasses,
          )}
          type={type}
        />
        <p
          className={`fontPreset10 absolute right-6 text-red-600 text-opacity-80 peer-placeholder-shown:hidden peer-valid:hidden peer-invalid:visible peer-focus:text-accentColor`}
        >
          {invalidText}
        </p>
      </div>
    </>
  );
}
