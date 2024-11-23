export default function BurgerMenu({ isOpen, handleClick }) {
  const sharedClassName = `block h-0.5 w-6 rounded-sm bg-secondaryColor transition-all duration-300 ease-out`;

  return (
    <>
      <button
        aria-label="toggle navigation menu"
        onClick={handleClick}
        className={`flex flex-col items-center justify-center p-2`}
      >
        <span
          className={`${sharedClassName} ${isOpen ? `translate-y-1 rotate-45` : `-translate-y-1`}`}
        ></span>
        <span
          className={`${sharedClassName} ${isOpen ? `my-0.5 opacity-0` : `opacity-1 my-[0.15rem]`} `}
        ></span>
        <span
          className={`${sharedClassName} ${isOpen ? `-translate-y-1 -rotate-45` : `translate-y-1`}`}
        ></span>
      </button>
    </>
  );
}
