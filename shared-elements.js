// shared-elements.js - Include this on all pages for navigation and footer
document.addEventListener('DOMContentLoaded', function() {
    // Navigation HTML
    const navHTML = `
        <nav>
            <div class="logo">Anthony Rebello</div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="projects.html">Research Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="ResumeAug2025.pdf" target="_blank">Resume</a></li>
            </ul>
        </nav>
    `;
    
    // Footer HTML with dynamic dots
    const footerHTML = `
        <footer class="footer">
            <div class="footer-dots"></div>
            <div class="footer-content">
                <div>© ${new Date().getFullYear()} Anthony Rebello</div>
                <div>
                    <a href="https://www.instagram.com/anthonyhrebello" target="_blank" rel="noopener">Instagram</a>
                    <a href="https://www.linkedin.com/in/anthonyhrebello/" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="mailto:anthonyhrebello@gmail.com" target="_blank" rel="noopener">Email</a>
                </div>
            </div>
        </footer>
    `;
    
    // Replace navigation placeholder
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navHTML;
    }
    
    // Replace footer placeholder
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = footerHTML;
        
        // Create animated dots after footer is added
        createAnimatedDots();
    }
});

function createAnimatedDots() {
    const dotsContainer = document.querySelector('.footer-dots');
    if (!dotsContainer) return;
    
    // Create multiple floating dots
    for (let i = 0; i < 8; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';
        
        // Random starting position and animation delay
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 4 + 's';
        dot.style.animationDuration = (3 + Math.random() * 3) + 's';
        
        dotsContainer.appendChild(dot);
    }
}
