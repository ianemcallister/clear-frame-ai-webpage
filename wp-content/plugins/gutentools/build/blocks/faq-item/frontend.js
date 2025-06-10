/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/blocks/faq-item/frontend.js ***!
  \*****************************************/
document.addEventListener("DOMContentLoaded", () => {
  const initFAQItem = faqItem => {
    const content = faqItem.querySelector(".gutentools-faq-content");
    const toggleBtn = faqItem.querySelector(".gutentools-faq-toggle");
    const isOpen = content.classList.contains("is-open");

    // Set initial content state
    content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";
    content.style.opacity = isOpen ? "1" : "0";

    // Set button state
    toggleBtn.setAttribute("aria-expanded", isOpen);

    // Icon init
    const icon = toggleBtn.querySelector("i");
    if (icon) {
      const openIcon = toggleBtn.getAttribute("data-open");
      const closeIcon = toggleBtn.getAttribute("data-close");
      icon.classList.toggle(openIcon, !isOpen);
      icon.classList.toggle(closeIcon, isOpen);
      icon.classList.toggle("rotated", isOpen); // Add rotation
    }
    return {
      content,
      toggleBtn
    };
  };
  const handleFAQClick = (faqItem, content, toggleBtn) => {
    const isOpen = content.classList.contains("is-open");

    // Animate content
    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px"; // ensure it's measured
      requestAnimationFrame(() => {
        content.style.maxHeight = "0";
        content.style.opacity = "0";
      });
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    }
    content.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", !isOpen);

    // Animate icon
    const icon = toggleBtn.querySelector("i");
    if (icon) {
      const openIcon = toggleBtn.getAttribute("data-open");
      const closeIcon = toggleBtn.getAttribute("data-close");
      icon.classList.toggle(openIcon, isOpen);
      icon.classList.toggle(closeIcon, !isOpen);
      icon.classList.toggle("rotated", !isOpen);
    }
  };
  document.querySelectorAll(".wp-block-gutentools-faq-item").forEach(faqItem => {
    const {
      content,
      toggleBtn
    } = initFAQItem(faqItem);
    const title = faqItem.querySelector(".gutentools-faq-title");
    toggleBtn.addEventListener("click", () => handleFAQClick(faqItem, content, toggleBtn));
    if (title) {
      title.addEventListener("click", () => handleFAQClick(faqItem, content, toggleBtn));
    }
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map