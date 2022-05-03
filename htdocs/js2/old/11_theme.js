function change_theme() {
    var x = document.getElementById('body');
    var y = "";
    y = x.className;
    //y = localStorage.setItem('theme', '');

    var z = "";
    if (y == "dark-theme") z = "";
    else
        z = "dark-theme";
    x.className = z;

    localStorage.setItem('theme', z);

    return false;
}
function set_theme() {
    var x = document.getElementById('body');
    var y = "";
    //y = x.className;
    y = localStorage.getItem('theme');
    x.className = y;

}
set_theme();