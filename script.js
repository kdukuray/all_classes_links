// Simple script for course links page
document.addEventListener('DOMContentLoaded', () => {
    // Add click analytics (console log for now)
    const links = document.querySelectorAll('.course-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const linkTitle = link.querySelector('.link-title').textContent;
            console.log(`Clicked: ${linkTitle}`);
        });
    });
});
