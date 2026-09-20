import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTopButton.css";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // يظهر الزر بعد النزول 300px
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف الحدث عند إغلاق المكون
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // لا يظهر الزر إلا بعد النزول
  if (!showButton) {
    return null;
  }

  return (
    <button
      className="scroll-to-top-button"
      onClick={scrollToTop}
      aria-label="العودة إلى الأعلى"
    >
      <FiArrowUp />
    </button>
  );
}

export default ScrollToTopButton;