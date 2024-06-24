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
                const speed = Math.random() * (50 - 10) + 10; 
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
        
        const data_original = element.getAttribute("data-original");
        const data_alternative = element.getAttribute("data-alternative");
        let flashDuration = 200;
        
        if(data_alternative == null){
            console.log("I let it pass with NO TRANSCRIPTION");
            setTimeout(() => {
                element.style.visibility = 'hidden';
            }, 100); 
    
            
            setTimeout(() => {
                element.style.visibility = 'visible';
            }, 300); 
        }else{

            
            console.log("I let it pass with the transcription, " + data_alternative);
            console.log("And with original value , " + data_alternative);

            setTimeout(() => {
                element.style.visibility = 'hidden';
            }, flashDuration); 
            
            setTimeout(() => {
                element.style.visibility = 'visible';
                element.innerHTML = data_alternative;
            }, flashDuration * 2); 
            
            setTimeout(() => {
                element.style.visibility = 'hidden';
            }, flashDuration * 3); 
            
            setTimeout(() => {
                element.style.visibility = 'visible';
                element.innerHTML = data_original;
            }, flashDuration * 4); 
        }   
        
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

// Ludumum Corner Display Background (class : '.ludumum')
document.addEventListener("DOMContentLoaded", function() {
    const ludumumElements = document.querySelectorAll('.ludumum');

    ludumumElements.forEach(element => {
        element.addEventListener('click', function() {
            const content = this.querySelector('.ludumum-content');
            const bg = this.querySelector('.ludumum-bg');

            if (content.style.display === 'none') {
                content.style.display = 'block';
                bg.style.opacity = 0.4;
            } else {
                content.style.display = 'none';
                bg.style.opacity = 1;
            }
        });
    });
});