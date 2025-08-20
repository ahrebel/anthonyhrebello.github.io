// navigation.js - Include this on all pages
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Find the nav placeholder and replace it
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navHTML;
    }
});
