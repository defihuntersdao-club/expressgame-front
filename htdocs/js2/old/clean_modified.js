function clean_modified() {
    log("clean_modified");
    var x = '';
    var y = '';
    var l = 0;
    x = document.getElementsByClassName('modified');
    l = x.length;
    for (i = 0; i < l; i++) {
        y = x[i];
        y.innerHTML = "-";
    }

}