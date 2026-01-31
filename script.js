// Simple script for course links page
// Add smooth loading animations
document.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.class-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.opacity = '0';
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });

    // Add click analytics (console log for now)
    const links = document.querySelectorAll('.course-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const linkTitle = link.querySelector('.link-title').textContent;
            console.log(`Clicked: ${linkTitle}`);
        });
    });
});
