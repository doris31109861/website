let num = 1;
setInterval(function () {
    document.getElementById("count").textContent = num;
    num ++;
    console.log(num);
}, 1000);

