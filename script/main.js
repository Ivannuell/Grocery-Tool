let bttn = document.getElementById("add_bttn");
let t_name;
let t_price;
let total = 0;
let ell;

bttn.addEventListener('click', addItem);
let x;


calTotal();

//Initial run total count.\

function calTotal() {
    x = document.getElementsByClassName("item_price")

    total = 0;
    
    for (let index = 0; index < x.length; index++) {
        total += Number(x[index].innerHTML);
    }
    
    document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
}


// Functions //
function addItem() {
    t_name = document.getElementById("p_name").value;
    t_price = document.getElementById("p_price").value;

    if (t_name == "" && t_price == ""){
        return;
    }
    
    ell = `<tr><td>${t_name}</td><td  class="item_price" >${t_price}</td></tr>`;
    document.getElementById("main_table").innerHTML +=  ell;

    calTotal();
}




