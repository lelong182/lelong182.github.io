function browserValid() {
    if (['Firefox', 'Firefox Mobile', 'Chrome', 'Chrome Mobile'].indexOf(platform.name) === -1) {
        window.onload = function() {
            document.body.innerHTML = '';
            document.body.style.background = "url('assets/images/notification-brower.png') no-repeat center center / cover";
        }
        return false;
    }
    return true;
}