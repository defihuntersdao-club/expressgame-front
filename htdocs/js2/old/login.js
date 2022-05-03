function login_set(wal) {
    log("Login: " + wal);

    if (wal.length == 42) {
        wal = wal.toLowerCase();
        glob["wal"] = wal;
        localStorage.setItem('wal', wal);
        //login_redir("/claim/"+wal);
        check_logining();
        sale_set_val(wal);
    }
}
function login_unset() {
    var wal = '';
    glob["wal"] = wal;
    localStorage.setItem('wal', wal);
    login_redir(wal);
    connect_wallet_show_hide(1);

}
function login_redir(url) {
    redir(url);
}
function login_get() {
    var wal = localStorage.getItem('wal');
    return wal;
}

function check_logining() {
    var x = document.getElementById("auth_off");
    var y = document.getElementById("auth_on");
    log("check_logining");
    var wal = login_get();
    if (wal !== null && wal.length == 42) {
        login_redir("/claim/" + wal);
        x.classList.remove("d-none");
        y.classList.add("d-none");
        connect_wallet_show_hide(0);
        wallet_id_set(wal);
        networks_show(true);
    }
    else {
        login_redir("/claim/");
        x.classList.add("d-none");
        y.classList.remove("d-none");
        connect_wallet_show_hide(1);
        wallet_id_set("-");
        networks_show(false);
    }
}

check_logining();

function login_explorer(e) {
    var wal = login_get();
    var url = "https://polygonscan.com/address/" + wal;
    e.href = url;
    return true;
}
function logout() {
    var x = "";
    x = document.getElementById('close_acc');

    login_unset();
    connect_wallet_show_hide(1);
    login_redir("/claim/");
    x.click();
    check_logining();
    return false;
}
