import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main");
    const elements = document.querySelectorAll<HTMLElement>(
      "main section, main article, main blockquote, footer",
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    main?.classList.remove("page-enter");
    if (main) {
      void main.offsetWidth;
      main.classList.add("page-enter");
    }

    elements.forEach((element) => element.classList.add("reveal-pending"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.remove("reveal-pending");
        element.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            entry.target.classList.add("reveal-visible");
          } else {
            entry.target.classList.remove("reveal-visible");
            entry.target.classList.add("reveal-pending");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      main?.classList.remove("page-enter");
    };
  }, [pathname]);

  return null;
}
