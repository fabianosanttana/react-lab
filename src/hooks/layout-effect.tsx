import { useLayoutEffect, useRef } from "react";

export const useLayoutEffectSample = () => {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const div = ref.current;
    if (div) {
      div.style.backgroundColor = "pink";
    }
  }, []);
  return ref;
};
