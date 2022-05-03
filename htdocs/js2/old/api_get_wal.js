glob["api_interval"] = 10;
glob["api_i"] = 0;
glob["api_wallet_info"] = new Array();
function get_wallet_info() {
    var wal = login_get();
    if (wal !== null && wal.length == 42) {
        var url = "";
        url += glob["api_url"];
        url += "wallet/";
        url += wal;

        getData(url, "load_wallet_info(xhr.response)");
    }
    glob["api_i"] = glob["api_interval"];
}
function load_wallet_info(data) {
    //    console.log(data);
    var mas = new Array();
    var x = "";
    var t = JSON.parse(data);
    //        result_global = obj2arr(t);
    if (t.result !== null) {
        mas = obj2arr(t.result);
        //console.log(mas);
        for (const prop in t.result) {
            if (glob["api_wallet_info"][prop] === null || glob["api_wallet_info"][prop] != mas[prop])
                glob["api_wallet_info"][prop] = mas[prop];

            //console.log(prop+' '+mas[prop]);
            x = document.getElementById(prop);
            if (x !== null) {
                if (x.innerHTML != mas[prop]) {
                    x.innerHTML = mas[prop];

                }
            }

        }
    }


    glob["api_i"] = 1;
}
function load_interval() {
    if (glob["api_i"] <= 0) {
        get_wallet_info();
    }

    glob["api_i"]--;
    log("API_I:" + glob["api_i"]);
}

setInterval(load_interval, 1000);
