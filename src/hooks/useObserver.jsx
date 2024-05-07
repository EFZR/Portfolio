import { useEffect, useRef } from "react";

function useObserver() {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show__observer")
          }
        });
      },
      { threshold: 0 }
    )
  );

  useEffect(() => {
    const elements = document.querySelectorAll('[observe=true]');
    elements.forEach((element) => observer.current.observe(element));

    return () =>
      elements.forEach((element) => observer.current.unobserve(element));
  }, [observer]);
}

export default useObserver;
