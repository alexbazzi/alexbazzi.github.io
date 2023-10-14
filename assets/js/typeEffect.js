document.addEventListener('DOMContentLoaded', function(){
    var options = {
        strings: [
            "Penetration Tester",
            "Software Engineer",
            "Cloud Architect",
            "Network Engineer",
            "InfoSec Auditor"], 
        typeSpeed: 40,  // Speed in milliseconds
        backSpeed: 20,  // backspacing speed in milliseconds
        loop: true,  // loop on or off (true or false)
        cursorChar: '|'
    };
    var typed = new Typed("#typed", options);
});

