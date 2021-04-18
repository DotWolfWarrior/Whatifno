document.addEventListener("DOMContentLoaded", event => {
    console.log("done");
});


function generate() {
    var num = 4;
    var invpop = document.getElementById("inverpop");
    var pop = getDecimalValue("pop");
    invpop.innerHTML = parseFloat(1-pop).toFixed(num);

    var inveramount = document.getElementById("inveramount");
    var amount = getDecimalValue("amount");
    inveramount.innerHTML = parseFloat(1-amount).toFixed(num);

    var inverinver = document.getElementById("inverinver");
    var inver = getDecimalValue("inver");
    inverinver.innerHTML = parseFloat(1-inver).toFixed(num);

    var inverinverinver = document.getElementById("inverinverinver");
    var inverpopinver = document.getElementById("inverpopinver");
    var popinveramount = document.getElementById("popinveramount");
    var popamount = document.getElementById("popamount");

    
    
    var invinv = parseFloat(((1-pop) * (1-inver)).toFixed(num));
    var invpopinv = parseFloat(((1-pop) * inver).toFixed(num));
    var popinvamount = parseFloat((pop * (1-amount)).toFixed(num));
    var popamounts = parseFloat((pop * amount).toFixed(num));
    popamount.innerHTML = popamounts;
    popinveramount.innerHTML = popinvamount;
    inverpopinver.innerHTML = invpopinv;
    inverinverinver.innerHTML = invinv;

    var check = document.getElementById("check");
    var b = document.getElementById("b");
    var notb = document.getElementById("notb");
    var check1 = invinv+invpopinv+popinvamount+popamounts
    if (check1 == 1) {
        check.innerHTML = "Math is right";
    } else {
        check.innerHTML = "Something is wrong";
    }
    b.innerHTML = `${popamounts} + ${invpopinv} = ${popamounts+invpopinv}`
    notb.innerHTML = `${popinvamount} + ${invinv} = ${popinvamount + invinv}`
}

function getDecimalValue(element) {
    var myvalue = document.getElementById(element).value;
    if(myvalue >= 1) {
      myvalue = myvalue / 100;
      document.getElementById(element).value = myvalue;
    }
    return myvalue;
}

function solve() {
    console.log("No Solve it your self. I'm not here to do all the work.")
}