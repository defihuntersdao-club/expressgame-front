var sale_mas = new Array();
function load_sale() {
    getData("/cache/sale.json", "load_sale_result(xhr.response)");
}

function load_sale_result(data) {
    var x = "";
    var t = JSON.parse(data);
    //        result_global = obj2arr(t);
    sale_mas = obj2arr(t);
    console.log(sale_mas);
    //clean_modified();
    sale_set_val(login_get());
}

load_sale();

function sale_set_val(wal) {
    log("sale_set_val: " + wal);
    //    var x = "";
    var y = "";
    var v = "";

    //clean_modified();

    if (sale_mas[wal] !== undefined) {

        if (sale_mas[wal]["seed"] !== undefined) {
            v = sale_mas[wal]["seed"];
            y = "ddao_seed_alloc";
            if (document.getElementById(y) !== undefined) {
                document.getElementById(y).innerHTML = v;
            }
        }

        if (sale_mas[wal]["private1"] !== undefined) {
            v = sale_mas[wal]["private1"];
            y = "ddao_private1_alloc";
            if (document.getElementById(y) !== undefined) {
                document.getElementById(y).innerHTML = v;
            }
        }

        if (sale_mas[wal]["private2"] !== undefined) {
            v = sale_mas[wal]["private2"];
            y = "ddao_private2_alloc";
            if (document.getElementById(y) !== undefined) {
                document.getElementById(y).innerHTML = v;
            }
        }

    }
}