/**
 * ===========================================
 * Portfolio User Experience Scripts
 * ===========================================
 * Handles the Dark Mode toggle functionality.
 * NOTE: Theme preference is temporary (session-only) and defaults to
 * the user's system setting on initial load.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check for element existence before proceeding
    if (!toggleButton) {
        console.warn("Dark mode toggle button not found. Script exiting.");
        return;
    }

    /**
     * Updates the body class and the toggle icon based on the theme state.
     * @param {boolean} isDark - True to set dark mode, False for light mode.
     */
    function setTheme(isDark) {
        const icon = toggleButton.querySelector('i');
        
        // 1. Update the body class for CSS variables/styles
        if (isDark) {
            body.classList.add('dark-mode');
            // Show the sun icon (meaning: click me to go to light mode)
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            // Show the moon icon (meaning: click me to go to dark mode)
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // --- 1. INITIAL LOAD: Check System Preference ---
    
    // Check the OS/browser setting for preferred colour scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the initial theme state
    setTheme(prefersDark);


    // --- 2. EVENT LISTENER: Toggle Functionality ---
    
    toggleButton.addEventListener('click', () => {
        // Determine the current state
        const isCurrentlyDark = body.classList.contains('dark-mode');
        
        // Toggle to the opposite theme state
        setTheme(!isCurrentlyDark);
    });
});