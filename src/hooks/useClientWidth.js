import { useState, useEffect } from "react";

export default function useClientWidth({
  disable = false,
  operator,
  number,
} = {}) {
  const [clientWidth, setClientWidth] = useState();

  // disable boolean (if provided) can prevent useEffect from running to safe memory
  useEffect(() => {
    if (disable) return;

    function updateClientWidth() {
      setClientWidth(window.innerWidth);
    }

    updateClientWidth();
    window.addEventListener("resize", updateClientWidth);

    return () => window.removeEventListener("resize", updateClientWidth);
  }, [disable]);

  const compareOperators = {
    "<": () => clientWidth < number,
    "<=": () => clientWidth <= number,
    ">": () => clientWidth > number,
    ">=": () => clientWidth >= number,
    "=": () => clientWidth === number,
  };

  // type checking
  if (disable && typeof disable !== `boolean`) {
    throw new Error("disable must be of type boolean");
  }
  if (
    (operator && typeof operator !== `string`) ||
    (operator && !(operator in compareOperators))
  ) {
    throw new Error(
      "Invalid operator. Use one of: <, <=, >, >=, = as type string.",
    );
  }
  if ((number && typeof number !== `number`) || (number && number < 0)) {
    throw new Error("The 'number' option must be a positive number.");
  }

  // return
  if (operator && number) {
    return !disable ? compareOperators[operator]() : undefined;
  } else return disable ? undefined : clientWidth;
}
