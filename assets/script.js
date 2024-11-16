document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".titles, .texts, .video-list, .video, .announcement, .announcements, .social-media-title, .social-media-row, .social-media-row-one, .social-media-row-two, .social-media-row-three, .contact-title, .contact-paragraph, .contact-info, .contact-title-two, .contact-paragraph-two, .contact-info-two");
    const revealOnScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                section.classList.add("active");
            }
        });
    };
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});