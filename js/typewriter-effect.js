// DEPRECATED, USE "text-effects.js" instead!
document.addEventListener("DOMContentLoaded", function() {
    const typewriteElements = document.querySelectorAll('.typewrite');

    typewriteElements.forEach(element => {
        const text = element.textContent;
        const height = window.getComputedStyle(element).getPropertyValue('height');
        element.innerHTML = "";
        let index = 0;
        
        function type() {
            element.style.height = height;

            if (index < text.length) {
                const speed = Math.random() * (60 - 10) + 10; 
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    });
});
