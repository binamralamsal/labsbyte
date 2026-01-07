import { useEffect, useState } from "react";

export function useScrollStatus() {
  const [scrollStatus, setScrollStatus] = useState<{
    scrollDirection: null | "up" | "down";
    scrollPosition: number;
  }>({
    scrollDirection: null,
    scrollPosition: 0,
  });

  useEffect(() => {
    function handleScroll() {
      setScrollStatus((prev) => {
        return {
          scrollDirection:
            document.body.getBoundingClientRect().top > prev.scrollPosition
              ? "up"
              : "down",
          scrollPosition: document.body.getBoundingClientRect().top,
        };
      });
    }
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollStatus;
}
