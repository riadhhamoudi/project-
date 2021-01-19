const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

var currentPrice = new XMLHttpRequest();

currentPrice.open('GET', 'https://api.gdax.com/products/BTC-USD/book', true);
currentPrice.onreadystatechange = function(){
  if(currentPrice.readyState == 4){
    var ticker = JSON.parse(currentPrice.responseText);
    var price = ticker.bids[0][0];
    document.getElementById('btc').innerHTML = "$" + price;
  };
};
currentPrice.send();


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})



let BTC = document.getElementById("BTC");
let USD = document.getElementById("USD");

BTC.addEventListener("input", function(){convbit(this.id, this.value);});
USD.addEventListener("input", function(){convbit(this.id, this.value);});


function convbit(id, valeur){
    var ticker = JSON.parse(currentPrice.responseText);
    var price = ticker.bids[0][0];
    if(id == "BTC"){
      

        USD.value = valeur * price;
    }
    else if (id == "USD"){
        BTC.value = valeur / price;
    }
}


