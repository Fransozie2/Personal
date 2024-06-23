// Typewriter Effect (class : 'typewrite')
document.addEventListener("DOMContentLoaded", function() {

    const typewriteElements = document.querySelectorAll('.typewrite');

    typewriteElements.forEach(element => {
        const text = element.innerHTML;
        const height = window.getComputedStyle(element).getPropertyValue('height');
        element.innerHTML = "";
        let index = 0;
        let currentText = ''; 
        
        function type() {
            element.style.height = height;

            if (index < text.length) {
                const character = text.charAt(index);
                
                if (character === '<' && text.slice(index, index + 4) === '<br>') {
                    currentText += '<br>'
                    index += 3;
                } else {
                    currentText += character; // Append character normally
                }
                
                element.innerHTML = currentText; // Update text content
                index++;
                const speed = Math.random() * (20 - 5) + 5; 
                setTimeout(type, speed);

                /* OLD CODE
                const speed = Math.random() * (40 - 10) + 10; 
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
                */
            }
        }

        type();
    });
});

// Flashing Effect (class : 'flash')
document.addEventListener("DOMContentLoaded", function() {
    function flash(event){
        const element = event.target;

        setTimeout(() => {
            element.style.visibility = 'hidden';
        }, 100); 

        
        setTimeout(() => {
            element.style.visibility = 'visible';
        }, 300); 
        
    }

    document.querySelectorAll('.flash').forEach(element => {
        element.addEventListener('mouseenter', flash);
    });
});

// Ludum Corner Scroll Back Effect (class : 'scroll-reset')
document.addEventListener("DOMContentLoaded", function() {
    const scrollResetElements = document.querySelectorAll('.scroll-reset');

    scrollResetElements.forEach(element => {
        element.addEventListener('click', () => {
            element.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
    });
});