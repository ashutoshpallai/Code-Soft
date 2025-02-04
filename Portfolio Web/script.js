document.addEventListener("DOMContentLoaded", function () {
    const text = "Feel free to reach out to me at:";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});
