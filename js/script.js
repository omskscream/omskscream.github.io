window.onload = function() {
    var btn = document.getElementById('showBtn');
    var dogeDiv = document.getElementById('dogeDiv');
    var dogeIsShown = false;
    btn.onclick = function() {
        if (!dogeIsShown) {
            btn.innerHTML = 'Hide doge';
            dogeDiv.classList.remove('hidden');
            dogeIsShown = !dogeIsShown;
        } else {
            btn.innerHTML = 'Show doge';
            dogeDiv.classList.add('hidden');
            dogeIsShown = !dogeIsShown;
        }
    }
};