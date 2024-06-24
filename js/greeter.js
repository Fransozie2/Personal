document.addEventListener("DOMContentLoaded", function() {
    var greeter = document.getElementById('Greeter');
    var body = document.getElementById('main-layout')
    var displayDuration = 3000; 

    body.style.display = 'none';
    greeter.style.display = 'flex';


    setTimeout(function() {
        greeter.style.opacity = '0';
        

        setTimeout(function() {
            greeter.style.display = 'none';
            body.style.display = 'grid';
        }, 1000);
    }, displayDuration);
});
