msiTypingM = (id=".msiTypingM", speed = 100, multi = 1) => {
    var selector = document.querySelector(id);
    var txt = selector.innerText;
    var i = 0;
    selector.innerHTML = "";
    (function msi() {
        if (i < txt.length) {
            if (txt.charAt(i) == "\n" && multi == 1) {
                setTimeout(function () {
                    selector.innerHTML = "";
                }, speed * 3);
                i++;
                setTimeout(msi, speed * 3);
            } else {
                selector.innerHTML += txt.charAt(i);
                i++;
                setTimeout(msi, speed);
            }
        } else {
            i = 0;
            setTimeout(function () {
                selector.innerHTML = "";
            }, speed * 3);
            setTimeout(msi, speed * 5);
        }
    })();
}


