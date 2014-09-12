window.onload = function() {
    var btn = document.getElementById('showBtn');
    var dogeDiv = document.getElementById('dogeDiv');
    var dogeIsShown = false;
    btn.onclick = function() {
        if (!dogeIsShown) {
            btn.innerHTML = 'Hide doge';
            dogeDiv.style.display = 'block';
            dogeIsShown = !dogeIsShown;
        } else {
            btn.innerHTML = 'Show doge';
            dogeDiv.style.display = 'none';
            dogeIsShown = !dogeIsShown;
        }
    }
};