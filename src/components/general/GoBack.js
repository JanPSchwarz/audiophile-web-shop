import Link from "next/link";
export default function GoBack({ text, href }) {
  return (
    <>
      <Link href={href} className={`active:scale-100 active:text-accentColor`}>
        &larr; {text ? `All ` : `Go Back`}
        <span className={`inline-block first-letter:capitalize`}>{text}</span>
      </Link>
    </>
  );
}
